import cv2

# Replace 'your_camera_ip_address' with the actual IP address of your camera
camera_ip = '10.254.0.216:8080'

# Create the camera URL
camera_url = f'http://{camera_ip}/video'

# Create a VideoCapture object
cap = cv2.VideoCapture(camera_url)

# Check if the camera is opened successfully
if not cap.isOpened():
    print("Error: Could not open camera.")
    exit()

# Define the codec and create a VideoWriter object
fourcc = cv2.VideoWriter_fourcc(*'XVID')
output_file = 'output.avi'
out = cv2.VideoWriter(output_file, fourcc, 20.0, (int(cap.get(3)), int(cap.get(4))))

# Start capturing and recording
while True:
    ret, frame = cap.read()
    
    if not ret:
        print("Error: Failed to capture frame.")
        break
    
    # Display the frame (optional)
    cv2.imshow('IP Camera Feed', frame)

    # Write the frame to the output file
    out.write(frame)

    # Break the loop if 'q' key is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the VideoCapture and VideoWriter objects
cap.release()
out.release()

# Destroy any OpenCV windows
cv2.destroyAllWindows()
