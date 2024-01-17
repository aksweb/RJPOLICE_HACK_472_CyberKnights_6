import cv2

camera_url = "rtsp://172.16.3.123:8080/stream"  # Replace with your camera's RTSP stream URL
cap = cv2.VideoCapture(camera_url)

while True:
    ret, frame = cap.read()
    if not ret:
        break

    # Process and display the frame as needed
    cv2.imshow("CCTV Stream", frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()

