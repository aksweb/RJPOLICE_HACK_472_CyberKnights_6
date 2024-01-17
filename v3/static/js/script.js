function initMap() {
    const initialLocation = { lat: 26.866897708660996, lng: 75.81910123258926 };

    const map = new google.maps.Map(document.getElementById('map'), {
        center: initialLocation,
        zoom: 12.5,
    });

    let searchCircle;
    let yellowMarker;

    fetch('http://localhost:3000/api/cameras/locations')
        .then(response => response.json())
        .then(cameras => {
            cameras.forEach(camera => {
                // Check if required data is present before creating the marker
                if (camera.lat && camera.lng && camera.model) {
                    const marker = new google.maps.Marker({
                        position: { lat: camera.lat, lng: camera.lng },
                        map,
                        title: camera.model,
                    });

                    const infoWindow = new google.maps.InfoWindow({
                        content: `
                        <p>Owner: ${camera.ownerName || 'Not available'}</p>
                        <p>Contact: ${camera.ownerPhone || 'Not available'}</p>
                        <p>Contact: ${camera.locationName || 'Not available'}</p>
                        <p>Model: ${camera.model}</p>
                        <p>Resolution: ${camera.resolution || 'Not available'}</p>
                        <p>I.P. : ${camera.ip || 'Not available'}</p>

            `,
                    });

                    marker.addListener('click', () => {
                        infoWindow.open(map, marker);
                    });
                } else {
                    console.error('Invalid camera data:', camera);
                }
            });
        })
        .catch(error => console.error('Error fetching camera locations:', error));

    const searchInput = document.getElementById('locSearch');
    const searchButton = document.querySelector('button');
    const routeCoordinates = JSON.parse(localStorage.getItem('route_coordinates'));

    searchButton.addEventListener('click', () => {
        const geocoder = new google.maps.Geocoder();
        const address = searchInput.value;

        geocoder.geocode({ address: address }, (results, status) => {
            if (status === 'OK' && results[0]) {
                const location = results[0].geometry.location;

                // Remove existing search circle and yellow marker
                if (searchCircle) {
                    searchCircle.setMap(null);
                }
                if (yellowMarker) {
                    yellowMarker.setMap(null);
                }

                // Add a circle to highlight the searched area
                searchCircle = new google.maps.Circle({
                    strokeColor: '#FF0000',
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: 'blue',
                    fillOpacity: 0.35,
                    map,
                    zoom: 18.5,
                    center: location,
                    radius: 1000, // Adjust the radius as needed (in meters)
                });

                // Add a yellow marker to the specified location
                yellowMarker = new google.maps.Marker({
                    position: location,
                    map,
                    title: 'Searched Location',
                    icon: {
                        path: google.maps.SymbolPath.CIRCLE,
                        fillColor: 'yellow',
                        fillOpacity: 1,
                        strokeColor: 'yellow',
                        strokeWeight: 1,
                        scale: 8,
                    },
                });

                // Fit the map to the bounds of the search circle
                const bounds = searchCircle.getBounds();
                map.fitBounds(bounds);

            } else {
                alert('Location not found. Please try again.');
            }
        });
    });
}
