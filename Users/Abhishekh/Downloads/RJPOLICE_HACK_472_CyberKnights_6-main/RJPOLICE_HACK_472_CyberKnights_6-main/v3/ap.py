from flask import Flask, render_template, Response, request, jsonify,  send_from_directory
from yolov7_package import Yolov7Detector
import os
import shlex
import json
import subprocess
from urllib.parse import unquote
from ipCam import generate_frames

app = Flask(__name__, static_folder='static', static_url_path='/static')

# Initialize the global variable
camera_ip = None

@app.route('/')
def index():
    return render_template('index.html')

def generate():
    global camera_ip

    while True:
        if camera_ip:
            frame, object_counts = generate_frames(camera_ip)

            # Convert object counts to JSON
            json_data = jsonify(object_counts)

            # Yield the frame and JSON data as a properly formatted SSE
            yield f"data: {json_data}\n\n"
            yield f"data: {frame}\n\n"
                
@app.route('/camerareg')
def camerareg():
    return render_template('camerareg.html')

# //logout
@app.route('/user_login')
def user_login():
    return render_template('user_login.html')

#update details
@app.route('/updatedetail')
def updatedetail():
    return render_template('updatedetail.html')

#police signin
@app.route('/policesignin')
def policesignin():
    return render_template('policesignin.html')

#police loginin
@app.route('/policelogin')
def policelogin():
    return render_template('policelogin.html')

#admin-audio-call
@app.route('/admin-audio-call')
def adminaudiocall():
    return render_template('admin-audio-call.html')

#searchcell1
@app.route('/searchcell1')
def searchcell1():
    return render_template('searchcell1.html')

#trackcell
@app.route('/trackcell')
def trackcell():
    return render_template('trackcell.html')
#trackcell
@app.route('/trackcell1')
def trackcell1():
    return render_template('trackcell1.html')

#trackcell
@app.route('/trackcell2')
def trackcell2():
    return render_template('trackcell2.html')

@app.route('/ownercell1')
def ownercell1():
    return render_template('ownercell1.html')

@app.route('/registration')
def registration():
    return render_template('registration.html')

@app.route('/runcode')
def run_code():
    subprocess.run(['python', 'stream.py'])
    return 'Script executed successfully!'

@app.route('/cameracell')
def cameracell():
    global camera_ip
    encoded_ip = request.args.get('ip')
    camera_ip = unquote(encoded_ip)
    # try :
    #     with open('static/classes.json') as json_file:
    #         json_data = json.load(json_file)
    # except json.JSONDecodeError as e:
    #     return jsonify({"error": f"Error decoding JSON: {e}"}), 500

    return render_template('cameracell.html', ip=camera_ip)

    # return render_template('cameracell.html', ip=camera_ip)

@app.route('/static/<path:filename>')
def serve_static(filename):
    root_path = os.path.join(app.root_path, 'static')
    return send_from_directory(root_path, filename, as_attachment=True)


@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(camera_ip), mimetype='multipart/x-mixed-replace; boundary=frame')

# @app.route('./view_nearby')

if __name__ == '__main__':
    app.run(debug=True)

# def run_script():
#     subprocess.run(['python', 'ipCam.py'])  # Replace 'your_script.py' with the actual name of your Python script
#     return 'Script executed successfully!'

# @app.route('/video')
# def video():
#     classes = []  # Placeholder for detected classes
#     return render_template('video.html', classes=classes)




