class MessageSet():
    
  def __init__(self):

    self.CommandInt = {
        "target_system": 0,
        "target_component": 0,
        "frame": 0,
        "command": 0,
        "current": 0,
        "autocontinue": 0,
        "param1": 0,
        "param2": 0,
        "param3": 0,
        "param4": 0,
        "x": 0,
        "y": 0,
        "z": 0,  
    }
    self.CommandFloat = {
        "target_system": 0,
        "target_component": 0,
        "command": 0,
        "confirmation": 0,
        "param1": 0,
        "param2": 0,
        "param3": 0,
        "param4": 0,
        "param5": 0,
        "param6": 0,
        "param7": 0,  
    }
    self.CommandAck = None

    self.msgHeartbeat = None
    self.msgAttitude = None
    self.msgAttitudeQuat = None
    self.msgGpsRawInt = None
    self.msgGlobalPosInt = None
    self.msgLocalPosNED = None
    self.msgScaledImu = None
    self.msgHILState = None
    self.msgDistanceSensor = None
    self.msgMissionItemInt = None
    self.msgCameraCaptureStatus = None

class IsUpdated():
  def __init__(self):
    self.msgHeartbeat = False
    self.msgAttitude = False
    self.msgAttitudeQuat = False
    self.msgGpsRawInt = False
    self.msgGlobalPosInt = False
    self.msgLocalPosNED = False
    self.msgScaledImu = False
    self.msgHILState = False
    self.msgDistanceSensor = False
    self.msgMissionItemInt = False
    self.msgCameraTrackingImageStatus = False
    self.msgCameraCaptureStatus = False





if __name__ == '__main__':
  pass