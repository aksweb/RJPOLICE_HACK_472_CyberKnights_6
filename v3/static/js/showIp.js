document.addEventListener("DOMContentLoaded", function () {
  // Find the button element by its ID
  const showIpButton = document.getElementById("showIpButton");

  // Add a click event listener to the button
  showIpButton.addEventListener("click", function () {
    // Read data from local storage
    const storedCoordinates = localStorage.getItem("selectedCoordinates");

    // Check if data is present
    if (storedCoordinates) {
      // Parse the JSON data
      const coordinates = JSON.parse(storedCoordinates);

      // Extract and display IPs in a list format
      const ipList = document.getElementById("ipList");
      ipList.innerHTML = "<strong>IP List:</strong>";

      coordinates.forEach((entry) => {
        if (entry.ip) {
          const listItem = document.createElement("li");
          listItem.textContent = entry.ip;
          ipList.appendChild(listItem);
        }
      });
    } else {
      alert("No coordinates found in local storage.");
    }
  });
});
