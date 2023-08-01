from __future__ import print_function

from pymavlink import mavutil
import pymavlink.dialects.v20.common as mavlink
import threading
import time
import logging
import globals
import random
# import messageSet
import loggerASCL

# Crate logger
logger = logging.getLogger()
# Set log level
logger.setLevel(logging.DEBUG)

fileLogger = loggerASCL.FileLogger()

class MavSerialConnection(threading.Thread):
    def __init__(self, port, baudRate = 921600, sendFreq = 1, recvFreq = 2, targetSystem = 1, targetComponent = 0):
        threading.Thread.__init__(self)
        self.t1 = threading.Thread(target = self.receive_message)
        self.t1.daemon = True 
        self.t2 = threading.Thread(target = self.send_message)
        self.t2.daemon = True
        
        self.is_running = False
        self.test_mode = False
              
        self.port = port
        self.baudRate = baudRate
        self.sendFreq = sendFreq
        self.recvFreq = recvFreq
        self.targetSystem = targetSystem
        self.targetComponent = targetComponent
        self.mavlinkUtil = None
        self.sendEvent = None
        self.receiveEvent = None
        self.recvMsg = None
        self.mavlink = None
        self.sendMsgTime = 0
        self.recvMsgTime = 0
        self.sendCount = 0
        self.recvCount = 0
        self.isRunning = False
        self.isSerialOpen = False
        self.serial = None
        self.thread = None
        self.daemon = True ## 문제 발생 시 삭제
        self._lock = threading.Lock()
        self.t1._lock =  threading.Lock()
        self.t2._lock =  threading.Lock()
        self.startswith = None

    def _connect(self):
        # Configure serial port
        # self.serial = serial.Serial(self.serialNumber, self.baudRate, timeout=0.5)
        
        # Create a MAVLink connection: returns mavserial instance for serial comm.
        self.mavlinkUtil = mavutil.mavlink_connection(self.port, self.baudRate)
        
        # Wait for the heartbeat message to find the system ID
        # self.mavlinkUtil.wait_heartbeat()
        
        
    def _disconnect(self):
        # Close serial port
        # self.serial.close()
        self.mavlinkUtil.close()
    
    def normalize_heading(self, yaw):
        heading = yaw % 360
        if(heading < 0):
            heading += 360
        return heading
        
    def receive_message(self):
        # Receive message
        # print(self.mavlinkUtil.port.is_open)

        while(self.mavlinkUtil.port.is_open):
            # print(self.mavlinkUtil.port.in_waiting)
            if globals.cmdIntReady == False and globals.cmdLongReady == False and self.mavlinkUtil.port.in_waiting > 0:
                
                self._lock.acquire()         
                self.recvMsg = self.mavlinkUtil.recv_msg()
                
                if self.recvMsg is not None:
                    fileLogger.log_mavlink_msg(self.recvMsg)
                    # print(self.recvMsg)
                    if(self.recvMsg.get_type() == 'HEARTBEAT'):
                        globals.msgSet.msgHeartbeat = self.recvMsg
                        globals.is_updated.msgHeartbeat = True
                        # logging.debug(globals.msgSet.msgHeartbeat)
                    elif(self.recvMsg.get_type() == 'HIL_STATE'):
                        globals.msgSet.msgHILState = self.recvMsg
                        globals.msgSet.msgHILState.yaw = self.normalize_heading(globals.msgSet.msgHILState.yaw)
                        globals.is_updated.msgHILState = True
                        # logging.debug(globals.msgSet.msgHILState)
                    elif(self.recvMsg.get_type() == 'DISTANCE_SENSOR'):
                        globals.msgSet.msgDistanceSensor = self.recvMsg
                        globals.is_updated.msgDistanceSensor = True
                        # logging.debug(globals.msgSet.msgDistanceSensor)
                    elif(self.recvMsg.get_type() == 'MISSION_ITEM_INT'):
                        globals.msgSet.msgMissionItemInt = self.recvMsg
                        globals.is_updated.msgMissionItemInt = True
                        print(globals.msgSet.msgMissionItemInt)
                        # logging.debug(globals.msgSet.msgMissionItemInt)
                    elif(self.recvMsg.get_type() == 'CAMERA_CAPTURE_STATUS'):
                        # print('seriacom received camera capture stat')
                        globals.msgSet.msgCameraCaptureStatus = self.recvMsg
                        print(globals.msgSet.msgCameraCaptureStatus)
                        # print(globals.msgSet.msgCameraCaptureStatus)
                        globals.is_updated.msgCameraCaptureStatus = True
                        # if(self.is_running and self.test_mode):
                        #     self._lock.release()
                        #     time.sleep(0.3)
                        #     self.test_func_send_track_point()
                        #     # time.sleep(0.02)
                        #     # self.test_func_send_track_rectangle()
                        #     # time.sleep(0.02)
                        #     # self.test_func_send_video_start_capture()
                        #     time.sleep(0.3)
                        #     self._lock.acquire()
                        # # logging.debug(globals.msgSet.msgCameraCaptureStatus)
                    else:
                        # logging.debug(f'Unknown message type at {self.port}: %s' % self.recvMsg.get_type())
                        print(self.recvMsg)
                self.recvCount += 1
                self.recvMsgTime = time.time()
                self._lock.release()
    
    def test_func_send_track_point(self):
        globals.msgSet.CommandFloat = {
            'target_system': 0,
            'target_component': 0,
            'command': 2004,
            'confirmation': 0,
            # 'param1': 5,
            # 'param2': 0,
            # 'param3': 0,
            'param1': 20 * float(random.random()),
            'param2': 20 * float(random.random()),
            'param3': 0.25 * random.randint(0,4),
            'param4': 0,
            'param5': 0,
            'param6': 0,
            'param7': 0
        }
        globals.cmdLongReady = True
        self.send_message()
        globals.cmdLongReady = False

    def test_func_send_track_rectangle(self):
        globals.msgSet.CommandFloat = {
            'target_system': 0,
            'target_component': 0,
            'command': 2005,
            'confirmation': 0,
            'param1': random.random(),
            'param2': random.random(),
            'param3': random.random(),
            'param4': random.random(),
            'param5': 0,
            'param6': 0,
            'param7': 0
        }
        globals.cmdLongReady = True
        self.send_message()
        globals.cmdLongReady = False

    def test_func_send_video_start_capture(self):
        globals.msgSet.CommandInt = {
            'target_system': 0,
            'target_component': 0,
            'frame': 0,
            'command': 2500,
            'current': 0,
            'autocontinue': 0,
            'param1': 0,
            'param2': random.randint(0,3),
            'param3': 0,
            'param4': 0,
            'x': 0,
            'y': 0,
            'z': 0
        }
        globals.cmdIntReady = True
        self.send_message()
        globals.cmdIntReady = False
                
    def send_message(self):
        self._lock.acquire()
        if(self.mavlinkUtil.port.is_open):
            if(globals.cmdIntReady):
                logging.debug(globals.msgSet.CommandInt)
                # print(globals.msgSet.CommandInt)
                self.mavlinkUtil.mav.command_int_send(globals.msgSet.CommandInt['target_system'], globals.msgSet.CommandInt['target_component'], globals.msgSet.CommandInt['frame'], globals.msgSet.CommandInt['command'], globals.msgSet.CommandInt['current'], globals.msgSet.CommandInt['autocontinue'], globals.msgSet.CommandInt['param1'], globals.msgSet.CommandInt['param2'], globals.msgSet.CommandInt['param3'], globals.msgSet.CommandInt['param4'], globals.msgSet.CommandInt['x'], globals.msgSet.CommandInt['y'], globals.msgSet.CommandInt['z'], False)
                # globals.cmdIntReady = False ## COMMENT THIS IF THERE ARE TWO OR MORE LISTENERS! CHECK socektio_server.py!
            if(globals.cmdLongReady):      
                logging.debug(globals.msgSet.CommandFloat)  
                print(globals.msgSet.CommandFloat)
                self.mavlinkUtil.mav.command_long_send(globals.msgSet.CommandFloat['target_system'], globals.msgSet.CommandFloat['target_component'], globals.msgSet.CommandFloat['command'], globals.msgSet.CommandFloat['confirmation'], globals.msgSet.CommandFloat['param1'], globals.msgSet.CommandFloat['param2'], globals.msgSet.CommandFloat['param3'], globals.msgSet.CommandFloat['param4'], globals.msgSet.CommandFloat['param5'], globals.msgSet.CommandFloat['param6'], globals.msgSet.CommandFloat['param7'], False)
                # globals.cmdLongReady = False ## COMMENT THIS IF THERE ARE TWO OR MORE LISTENERS! CHECK socektio_server.py!
        self._lock.release()

    def _run(self):
        self._connect()

        t1 = threading.Thread(target = self.receive_message)
        t1.daemon = True
        self.t1.start()
        
        t2 = threading.Thread(target = self.send_message)
        t2.daemon = True
        self.t2.start()

        self.is_running = True
        print(f'mavSerialConnection in {self.port} running at {self.baudRate}')

        # self.test_func_send_track_point()

        

if __name__ == '__main__':
    # pass
    mavSerial = MavSerialConnection("COM11", 921600)
    mavSerial._run()
    