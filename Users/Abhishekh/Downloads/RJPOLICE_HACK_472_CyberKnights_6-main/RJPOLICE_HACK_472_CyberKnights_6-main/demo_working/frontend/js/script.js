function initMap() {
    const initialLocation = { lat: 26.866981225673666, lng: 75.8190774381188 };

    const map = new google.maps.Map(document.getElementById('map'), {
        center: initialLocation,
        zoom: 4.7, // Adjust the zoom level as needed
    });

    // Fetch camera locations from the backend and plot markers
    fetch('http://localhost:3000/api/cameras/locations') // Update the URL
        .then(response => response.json())
        .then(cameras => {
            cameras.forEach(camera => {
                const marker = new google.maps.Marker({
                    position: { lat: camera.lat, lng: camera.lng }, // Use 'lat' and 'lng' directly
                    map,
                    title: camera.model, // Adjust field names as needed
                });

                // Add info window with camera details
                const infoWindow = new google.maps.InfoWindow({
                    content: `
            <h3>${camera.model}</h3>
            <p>Resolution: ${camera.resolution}</p>
            <p>Owner: ${camera.ownerName}</p>
            <p>Contact: ${camera.ownerEmail}</p>
          `,
                });

                marker.addListener('click', () => {
                    infoWindow.open(map, marker);
                });
            });
        })
        .catch(error => console.error('Error fetching camera locations:', error));
}
