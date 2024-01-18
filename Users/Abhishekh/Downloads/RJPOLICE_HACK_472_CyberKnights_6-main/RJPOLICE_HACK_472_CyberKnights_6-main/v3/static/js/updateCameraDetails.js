// updateCameraDetails.js


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

// Function to get ownerPhone from local storage
function getOwnerPhoneFromLocalStorage() {
    return localStorage.getItem('userPhone');
}

// Function to fetch and display existing camera details
// function fetchCameraDetails(ownerPhone) {
//     // AJAX request to fetch camera details based on ownerPhone
//     // Use the ownerPhone to identify the document in the database
//     // Populate the form fields with the fetched details
//     // ...
// }

// Function to update camera details
function updateCameraDetails(event) {
    event.preventDefault();

    // Fetch ownerPhone from local storage
    const ownerPhone = getOwnerPhoneFromLocalStorage();

    const getValue = (id) => document.getElementById(id).value;

    const updateData = {
        ownerName: getValue('ownerName'),
        aadhar: getValue('aadhar'),
        ownerEmail: getValue('ownerEmail'),
        ownerPhone: getValue('ownerPhone'),
        model: getValue('model'),
        ip: getValue('ip'),
        resolution: getValue('resolution'),
        recordingCapabilities: getValue('recordingCapabilities'),
        visibilityRange: getValue('visibilityRange'),
        lat: getValue('lat'),
        lng: getValue('lng'),
    };


    // Fetch the form data and construct the update payload
    // const updateData = {
    //     // ... Include the fields you want to update
    //     // Example:
    //     ownerName: document.getElementById('ownerName').value,
    //     visibilityRange: document.getElementById('visibilityRange').value,
    //     aa
    //     // ... Add other fields as needed
    // };

    // AJAX request to update camera details
    const backendURL = 'http://localhost:3000';
    const updateEndpoint = `/api/cameras/updateDetails/${ownerPhone}`;

    fetch(`${backendURL}${updateEndpoint}`, {
        method: 'PUT', // Assuming your backend uses PUT for updates
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
    })
        .then(response => response.json())
        .then(data => {
            // Handle the response if needed
            console.log('Update successful:', data);
            console.log("ph: ", ownerPhone);
            alert('Camera details updated successfully');
        })
        .catch(error => {
            // Handle the error
            console.error('Error updating camera details:', error);
            alert('Error updating camera details');
        });
}

// When the page loads, fetch and display existing camera details
document.addEventListener('DOMContentLoaded', function () {
    const ownerPhone = getOwnerPhoneFromLocalStorage();
    fetchCameraDetails(ownerPhone);
});
