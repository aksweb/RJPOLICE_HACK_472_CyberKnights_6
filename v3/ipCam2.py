import cv2
from yolov7_package import Yolov7Detector

camera_username = 'asdf'
camera_password = 'fdsa'
camera_ip = '192.168.56.99:8080/'
camera_url = f'http://{camera_username}:{camera_password}@{camera_ip}/video'

det = Yolov7Detector()
cap2 = cv2.VideoCapture(camera_url)

def generate_frames2():
    while True:
        ret, frame = cap2.read()
        if not ret:
            break

        frame = cv2.resize(frame, (640, 480))
        classes, boxes, scores = det.detect(frame)
        frame = det.draw_on_image(frame, boxes[0], scores[0], classes[0])

        ret, buffer = cv2.imencode('.jpg', frame)
        frame = buffer.tobytes()

        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')
