let map;
let marker;

function initMap() {
    const locationPicker = new LocationPicker('locationPicker', {
        setCurrentPosition: true,
    });

    map = locationPicker.map;
    marker = locationPicker.marker;

    // Event listener to update hidden inputs when marker position changes
    google.maps.event.addListener(marker, 'position_changed', function () {
        const latLng = marker.getPosition();
        document.getElementById('lat').value = latLng.lat();
        document.getElementById('lng').value = latLng.lng();
    });
}

function showKnowYourCamera() {
    document.getElementById('knowYourCameraPopup').style.display = 'block';
}

function hideKnowYourCamera() {
    document.getElementById('knowYourCameraPopup').style.display = 'none';
}
function registerCamera(event) {
    event.preventDefault();

    // Function to get form field values by ID
    const getValue = (id) => document.getElementById(id).value;

    const cameraData = {
        model: getValue('model'),
        resolution: getValue('resolution'),
        recordingCapabilities: getValue('recordingCapabilities'),
        ownerName: getValue('ownerName'),
        ownerEmail: getValue('ownerEmail'),
        ownerPhone: getValue('ownerPhone'),
        visibilityRange: getValue('visibilityRange'),
        lat: getValue('lat'),
        lng: getValue('lng'),
    };

    // AJAX request to send data to the backend
    const backendURL = 'http://localhost:3000';
    fetch(`${backendURL}/api/cameras/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cameraData),
    })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the backend (if needed)
            alert("registered successfully");
            console.log('Camera registered successfully:', data);
            // You can redirect to another page or show a success message here
        })
        .catch(error => {
            console.error('Error registering camera:', error);
            // Handle the error (e.g., show an error message to the user)
        });
}
