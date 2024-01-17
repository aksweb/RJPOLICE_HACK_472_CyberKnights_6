document.addEventListener("DOMContentLoaded", function () {
    const cameraLocationsContainer = document.getElementById("cameraLocations");

    // Fetch camera locations from the provided URL
    fetch("http://localhost:3000/api/cameras/locations")
        .then(response => response.json())
        .then(data => {
            // Assuming the data format is similar to the provided array
            const cameraLocations = data;

            cameraLocations.forEach(location => {
                const locationDiv = document.createElement("div");
                locationDiv.className = "camera-location";

                // Create image element on the left (15% width)
                const imageDiv = document.createElement("div");
                imageDiv.className = "location-image";
                // Set the background image URL to the specified path
                imageDiv.style.backgroundImage = `url(../static/img/man-in-suit-and-tie.png)`;
                locationDiv.appendChild(imageDiv);

                // Create text div on the right (85% width)
                const textDiv = document.createElement("div");
                textDiv.className = "location-text";
                textDiv.innerHTML = `<strong>Owner Name:</strong> ${location.ownerName}<br><strong>Location Name:</strong> ${location.locationName}<br> <strong> I.P. </strong> ${location.ip}`;

                // Create a form for each location
                const form = document.createElement("form");
                form.action = "/cameracell";
                form.method = "get";

                // Create a hidden input field to store the IP address
                const hiddenInput = document.createElement("input");
                hiddenInput.type = "hidden";
                hiddenInput.name = "ip";
                hiddenInput.value = location.ip;

                // Append the hidden input to the form
                form.appendChild(hiddenInput);

                // Create a button within the form
                const button = document.createElement("button");
                button.type = "submit";
                button.textContent = "View Video";
                form.appendChild(button);

                // Append the form to the text div
                textDiv.appendChild(form);

                locationDiv.appendChild(textDiv);
                cameraLocationsContainer.appendChild(locationDiv);
            });
        })
        .catch(error => {
            console.error("Error fetching camera locations:", error);
        });
});
