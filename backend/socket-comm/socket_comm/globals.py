import messageSet
import serialCom
# import video_router

def initialize(COM_FCC, COM_gimbal, BAUD_FCC, BAUD_gimbal):

    # Telemetries and Telecommands

    global mavSerial_FCC; global mavSerial_gimbal; 
    global msgSet; global sendAll; 
    global cmdIntReady; global cmdLongReady; 
    global is_updated


    mavSerial_FCC = serialCom.MavSerialConnection(COM_FCC, BAUD_FCC)
    mavSerial_gimbal = serialCom.MavSerialConnection(COM_gimbal, BAUD_gimbal)
    msgSet = messageSet.MessageSet()
    is_updated = messageSet.IsUpdated()
    sendAll = False
    cmdIntReady = False
    cmdLongReady = False
    
    
    # Video Feeds

    # global videoRouter
    # ipAddress = '192.168.0.4'; port = '554'; username = 'asclrtsp'; password = '0423503722'
    # videoRouter = video_router.VideoRouter(ipAddress, port, username, password)


