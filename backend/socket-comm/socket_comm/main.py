import sys
import time
import os
import threading
# import Addition as add
# import mavlinkGcs as mav
import serialCom
import socketio_server
import logging
import messageSet
import globals

if __name__ == "__main__": 

    COM_FCC = 'COM11'; COM_gimbal = 'COM3'
    globals.initialize(COM_FCC = COM_FCC, COM_gimbal = COM_gimbal, BAUD_FCC=921600, BAUD_gimbal=115200)
    globals.mavSerial_FCC._run()
    globals.mavSerial_gimbal._run()
    sioServer = socketio_server.SocketIOServer()   
    sioServer.start()



    
      
    
    

    
    
    


    

     
    