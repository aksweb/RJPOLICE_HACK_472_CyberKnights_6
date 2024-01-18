import cv2, json
from yolov7_package import Yolov7Detector

camera_username = 'asdf'
camera_password = 'fdsa'

def generate_frames(camera_ip):
    camera_url = f'http://{camera_username}:{camera_password}@{camera_ip}/video'
    cap = cv2.VideoCapture(camera_url)
    det = Yolov7Detector()

    while True:
        ret, frame = cap.read() 
        if not ret:
            break

        frame = cv2.resize(frame, (640, 480))
        classes, boxes, scores = det.detect(frame)
        frame = det.draw_on_image(frame, boxes[0], scores[0], classes[0])

        # Convert frame to bytes
        ret, buffer = cv2.imencode('.jpg', frame)
        frame_bytes = buffer.tobytes()

        # Yield the frame bytes with the appropriate boundary
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n\r\n')

def count_classes(classes):
    # Count occurrences of each class in the list
    class_counts = {}
    for class_name in classes:
        class_counts[class_name] = class_counts.get(class_name, 0) + 1
    return class_counts