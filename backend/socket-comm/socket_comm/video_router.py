import cv2
import datetime
import os

class VideoRouter():
  def __init__(self, ipAddress, port, username, password):
    url = f"rtsp://{username}:{password}@{ipAddress}:{port}/stream1"
    self.videoCapturer = cv2.VideoCapture(url, cv2.CAP_GSTREAMER)
    print(self.videoCapturer.getBackendName())
    # self.videoCapturer = cv2.VideoCapture(0, cv2.CAP_OPENCV_MJPEG)
    self.videoCapturer.set(cv2.CAP_PROP_FRAME_WIDTH, 1920)
    self.videoCapturer.set(cv2.CAP_PROP_FRAME_HEIGHT, 1080)

    if not self.videoCapturer.isOpened():
      print('Failed to open RTSP stream')
      exit()
    self.videoWriter = None
    self.startVideo = False
    self.writeVideo = False


    
  def start_video(self):
    self.startVideo = True
    while True:
      ret, frame = self.videoCapturer.read() # ret: 프레임이 들어왔는가? frame: 비디오 프레임 1장
      if not ret:
        print('No image returned')
        break
      cv2.imshow('video feed', frame)
      if(self.writeVideo):
        self.videoWriter.write(frame)
      
      waitKey = cv2.waitKey(1) & 0xFF
      if waitKey == ord('q'):
        self.stop_video()
      elif waitKey == ord('s'):
        self.start_recording()
      elif waitKey == ord('z'):
        self.stop_recording()
      
      self.frameData = cv2.imencode('.jpg', frame)[1].tobytes()
      self.frameReady = True

  def stop_video(self):
    self.videoCapturer.release()
    cv2.destroyAllWindows()
    return 
  
  def start_recording(self):
    print('start_recording')
    currentTime = datetime.datetime.now()
    fps = 30
    width = int(self.videoCapturer.get(cv2.CAP_PROP_FRAME_WIDTH)); height = int(self.videoCapturer.get(cv2.CAP_PROP_FRAME_HEIGHT))
    fileName = str(currentTime.strftime('%Y%m%d_%H%M%S'))
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    baseDir = os.path.dirname(os.path.abspath(__file__))
    savePath = f'{baseDir}/captures'
    if not (os.path.exists(savePath)):
      os.makedirs(savePath, exist_ok = True)
    self.videoWriter = cv2.VideoWriter(savePath + '/' + fileName + 
                                       '.mp4', fourcc, fps, (width, height))
    self.writeVideo = True
    return
  
  def stop_recording(self):
    print('stop_recording')
    self.writeVideo = False
    self.videoWriter.release()
    return
      
if __name__ == '__main__':
  ipAddress = '192.168.0.4'; port = '554'; username = 'asclrtsp'; password = '0423503722'
  print(cv2.getBuildInformation())
  
  videoRouter = VideoRouter(ipAddress, port, username, password)
  videoRouter.start_video()
