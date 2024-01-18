document.addEventListener("DOMContentLoaded", function () {
    // Assuming you have a container element with ID 'track-cell-item11'
    const trackCellContainer = document.getElementById('track-cell-item1');

    if (trackCellContainer) {
        fetch("/static/alerts.json")
            .then(response => response.json())
            .then(data => {
                data.forEach(entry => {
                    const trackCellItem = document.createElement('div');
                    trackCellItem.classList.add('camera-location');

                    // Create text div on the right (85% width)
                    const textDiv = document.createElement("div");
                    textDiv.className = "location-text";
                    textDiv.innerHTML = `<strong>Number:</strong> ${entry.vehicle_number}<br><strong>Type:</strong> ${entry.type}<br> <strong>Alert:</strong> ${entry.alert}`;

                    // Create a form for each location
                    const form = document.createElement("form");
                    form.action = "/track";
                    form.method = "get";

                    // Create a hidden input field to store the vehicle number
                    const hiddenInput = document.createElement("input");
                    hiddenInput.type = "hidden";
                    hiddenInput.name = "number";
                    hiddenInput.value = entry.vehicle_number;

                    // Append the hidden input to the form
                    form.appendChild(hiddenInput);

                    // Create a button within the form
                    const button = document.createElement("button");
                    button.type = "submit";
                    button.textContent = "Search";
                    form.appendChild(button);

                    // Append the form to the text div
                    textDiv.appendChild(form);
                    trackCellItem.appendChild(textDiv);

                    // Append the new div to the container
                    trackCellContainer.appendChild(trackCellItem);
                });
            })
            .catch(error => console.error("Error fetching or parsing JSON data:", error));
    } else {
        console.error("Container not found");
    }
});
