#!/usr/bin/env python
import socketio
import logging
import threading
import uvicorn
import serialCom
import messageSet
import globals
import asyncio
import json
import time
import copy
 
# Crate logger
logger = logging.getLogger()
# Set log level
logger.setLevel(logging.WARNING)

class SocketIOServer(threading.Thread):
    # def __init__(self, server_addr='0.0.0.0', port=9309, async_mode='asgi') -> None:
    def __init__(self, server_addr='127.0.0.1', port=5796, async_mode='asgi') -> None:
        # Initialize Thread 
        threading.Thread.__init__(self)
        self.daemon = True
        self.loop_number = 0
        self.telemetry_missing = 0
        
        # Create a Socket.IO server
        self.sio = socketio.AsyncServer(logger=False, async_mode=async_mode, cors_allowed_origins="*")

        # Wrap with ASGI application
        self.app = socketio.ASGIApp(self.sio)

        # asyncio loop for Sending Messages
        # self.loop = asyncio.get_event_loop()

        # map events and methods
        
        self.sio.on('COMMAND_INT', handler = self.onReceiveCommandInt)
        self.sio.on('COMMAND_LONG', handler = self.onReceiveCommandLong)
        self.sio.on('ATTITUDE_QUATERNION', handler = self.SendAttitudeQuat)
        self.sio.on('HEARTBEAT', handler = self.SendHeartbeat)
        self.sio.on('GPS_RAW_INT', handler = self.SendGpsRawInt)
        self.sio.on('GLOBAL_POSITION_INT', handler = self.SendGlobalPosInt)
        self.sio.on('LOCAL_POSITION_NED', handler = self.SendLocalPosNED)
        self.sio.on('SCALED_IMU', handler =  self.SendScaledImu)
        self.sio.on('HIL_STATE', handler = self.SendHILState)
        self.sio.on('DISTANCE_SENSOR', handler = self.SendDistanceSensor)
        self.sio.on('MISSION_ITEM_INT', handler = self.SendMissionItemInt)
        self.sio.on('CAMERA_CAPTURE_STATUS', handler = self.SendCameraCaptureStatus)
        self.sio.on('SEND_ALL', handler = self.SendAll)
        self.sio.on('disconnect', handler = self.StopAll)
        self.sio.on('requestBreak', handler = self.StopAll)

        # Run the server
        
        uvicorn.run(self.app, host=server_addr, port=port)
        time.sleep(0.5)

        
    async def SendAll(self, sid):
        logging.debug('SendAll called')
        start_time = time.time()
        globals.sendAll = True
        event = asyncio.Event()

        async def reset_update(obj,attr_name):
            await asyncio.sleep(0) # Allow other tasks to run
            setattr(obj, attr_name, False)
            event.set()
        
        async def check_update_again(): # while loop 가 데이터 업데이트 전에 한 번 더 도는 순간 탈출하는 현상을 방지
            update_flag = False
            self.telemetry_missing += 1
            for _ in range(60001): #timeout = 1 minute
                await asyncio.sleep(0.01)
                for attr in dir(globals.is_updated):
                    if not attr.startswith('__'):
                        value = getattr(globals.is_updated, attr)
                        if(value):
                            update_flag = True
                            return update_flag
                        else:
                            pass
            return update_flag           
            

        desired_loop_freq = 24
        desired_loop_duration = 1/desired_loop_freq
        last_iteration_time = time.time()

        while(True):
            if(not globals.sendAll):
                end_time = time.time()
                print('time elapsed:', end_time - start_time)
                print('loop_number:', self.loop_number)
                print('telemetry_missing:', self.telemetry_missing)
                self.loop_number = 0
                self.telemetry_missing = 0
                break
            
            condition_met = False
            if(globals.is_updated.msgHeartbeat == True):
                asyncio.create_task(reset_update(globals.is_updated, "msgHeartbeat"))
                await event.wait()
                event.clear()
                await self.sio.emit('HEARTBEAT', globals.msgSet.msgHeartbeat.to_json())
                condition_met = True
            # logging.debug(globals.is_updated.msgHILState)  
              
            if(globals.is_updated.msgHILState == True):
                asyncio.create_task(reset_update(globals.is_updated, "msgHILState"))
                await event.wait() 
                event.clear()
                await self.sio.emit('HIL_STATE', globals.msgSet.msgHILState.to_json())
                condition_met = True
                
            if(globals.is_updated.msgDistanceSensor == True):
                asyncio.create_task(reset_update(globals.is_updated,"msgDistanceSensor"))
                await event.wait()
                event.clear()
                await self.sio.emit('DISTANCE_SENSOR', globals.msgSet.msgDistanceSensor.to_json())
                condition_met = True

            if(globals.is_updated.msgMissionItemInt == True):
                asyncio.create_task(reset_update(globals.is_updated, "msgMissionItemInt"))
                await event.wait()
                event.clear()
                await self.sio.emit('MISSION_ITEM_INT', globals.msgSet.msgMissionItemInt.to_json())
                condition_met = True

            if(globals.is_updated.msgCameraCaptureStatus == True):
                asyncio.create_task(reset_update(globals.is_updated, "msgCameraCaptureStatus"))
                await event.wait()
                event.clear()
                await self.sio.emit('CAMERA_CAPTURE_STATUS', globals.msgSet.msgCameraCaptureStatus.to_json())
                condition_met = True

            if not condition_met: # 어떤 데이터도 업데이트되지  않은 경우
                update_status_task = asyncio.create_task(check_update_again())
                await update_status_task
                update_status = update_status_task.result()
                if(not update_status):
                    logging.debug('Breaking Loop.')
                    globals.sendAll = False


            elapsed_time = time.time() - last_iteration_time
            sleep_duration = desired_loop_duration - elapsed_time
            
            if(sleep_duration > 0):
                time.sleep(elapsed_time)
            
            last_iteration_time = time.time()
            self.loop_number += 1
        
    async def StopAll(self, sid):
        globals.sendAll = False

    ## Telecommands

    def offset_gimbal_state(self, gimbal_cmd: dict, gimbal_state: dict) -> None:
        gimbal_cmd['param1'] -= gimbal_state['image_interval'] # yaw
        gimbal_cmd['param2'] -= gimbal_state['available_capacity'] # pitch
        return gimbal_cmd


    def parse_message_cmd_long(self, msg: dict):
        for key in msg:
            if key in globals.msgSet.CommandFloat:
                globals.msgSet.CommandFloat[key] = copy.deepcopy(msg[key])
                if globals.msgSet.CommandFloat[key] == 2004:
                    globals.msgSet.CommandFloat =  self.offset_gimbal_state(globals.msgSet.CommandFloat, json.loads(globals.msgSet.msgCameraCaptureStatus.to_json()))
                # globals.msgSet.CommandFloat['command'] = 2005

    def parse_message_cmd_int(self, msg: dict):
        for key in msg:
            if key in globals.msgSet.CommandInt:
                globals.msgSet.CommandInt[key] = copy.deepcopy(msg[key])    

    def zero_command_int(self, msg_int: dict):
        msg_int = {
            'target_system': 0,
            'target_component': 0,
            'frame': 0,
            'command': 0,
            'current': 0,
            'autocontinue': 0,
            'param1': 0,
            'param2': 0,
            'param3': 0,
            'param4': 0,
            'x': 0,
            'y': 0,
            'z': 0
        }

    def zero_command_long(self, msg_long: dict):
        msg_long = {
            'target_system': 0,
            'target_component': 0,
            'frame': 0,
            'command': 0,
            'current': 0,
            'autocontinue': 0,
            'param1': 0,
            'param2': 0,
            'param3': 0,
            'param4': 0,
            'x': 0,
            'y': 0,
            'z': 0
        }
    
    def onReceiveCommandInt(self, sid, msg):
        
        # print(msg)
        logger.warning(msg)
        self.parse_message_cmd_int(msg)
        globals.cmdIntReady = True
        # print(globals.msgSet.CommandInt)
        # globals.mavSerial_FCC.send_message()
        globals.mavSerial_gimbal.send_message()
        self.zero_command_int(globals.msgSet.CommandInt)
        globals.cmdIntReady = False ## CHECK serialCom.py

    
    def onReceiveCommandLong(self, sid, msg):

        # print(msg)
        self.parse_message_cmd_long(msg)    
        globals.cmdLongReady = True
        # print(globals.msgSet.CommandFloat)
        # globals.mavSerial_FCC.send_message()
        globals.mavSerial_gimbal.send_message()
        self.zero_command_long(globals.msgSet.CommandFloat)
        globals.cmdLongReady = False ## CHECK serialCom.pys

    ## Telemetries

    async def SendAttitude(self, sid):
        if(globals.msgSet.attitudeMsg != None):
            await self.sio.send(globals.msgSet.attitudeMsg.to_json())
            globals.msgSet.attitudeMsg = None
    

    async def SendAttitudeQuat(self, sid):
        if(globals.msgSet.attitudeQuatMsg != None):
            await self.sio.send(globals.msgSet.attitudeQuatMsg.to_json())
    
    async def SendHeartbeat(self, sid):
        if(globals.msgSet.heartbeatMsg != None):
            await self.sio.send(globals.msgSet.heartbeatMsg.to_json())

    async def SendGpsRawInt(self, sid):
        if(globals.msgSet.msgGpsRawInt != None):
            await self.sio.send(globals.msgSet.msgGpsRawInt.to_json())

    async def SendGlobalPosInt(self, sid):
        if(globals.msgSet.msgGlobalPosInt != None):
            await self.sio.send(globals.msgSet.msgGlobalPosInt.to_json())

    async def SendLocalPosNED(self, sid):
        if(globals.msgSet.msgLocalPosNED != None):
            await self.sio.send(globals.msgSet.msgLocalPosNED.to_json())

    async def SendScaledImu(self, sid):
        if(globals.msgSet.msgScaledImu != None):
            await self.sio.send(globals.msgSet.msgScaledImu.to_json())
    
    async def SendHILState(self, sid):
        if(globals.msgSet.msgHILState != None):
            await self.sio.emit('HIL_STATE', globals.msgSet.msgHILState.to_json())

    async def SendDistanceSensor(self, sid):
        if(globals.msgSet.msgDistanceSensor != None):
            await self.sio.emit('DISTANCE_SENSOR', globals.msgSet.msgDistanceSensor.to_json())

    async def SendMissionItemInt(self, sid):
        if(globals.msgSet.msgMissionItemInt != None):
            await self.sio.emit('MISSION_ITEM_INT', globals.msgSet.msgMissionItemInt.to_json())

    async def SendCameraCaptureStatus(self, sid):
        if(globals.msgSet.msgCameraCaptureStatus != None):
            await self.sio.emit('CAMERA_CAPTURE_STATUS', globals.msgSet.msgCameraCaptureStatus.to_json())
    
    async def TestMsgHandler(self, sid):
        print()
    
        

if __name__ == '__main__':
    server = SocketIOServer()
    server.start()



            ## Video Router

        # def StartVideo(sid):
        #     globals.videoRouter.start_video()
        #     while(globals.videoRouter.startVideo):
        #         if(globals.videoRouter.frameReady):
        #             self.sio.send(globals.videoRouter.frameData)
        #             globals.videoRouter.frameReady = False
        # self.sio.on('START_VIDEO', handler = StartVideo)

        # def StopVideo(sid):
        #     globals.videoRouter.startVideo = False
        #     globals.videoRouter.stop_video()
        # self.sio.on('STOP_VIDEO', handler = StopVideo)

        # def StartRecording(sid):
        #     globals.videoRouter.start_recording()
        # self.sio.on('START_RECORDING')
    

    
    