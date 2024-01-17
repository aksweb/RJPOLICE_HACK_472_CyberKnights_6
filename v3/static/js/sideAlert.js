// Function to update the current alert setting div

function checkObjectCount() {
    const className = document.getElementById("classInput").value;
    const specifiedCount = parseInt(document.getElementById("countInput").value);

    updateCurrentAlertSetting(className, specifiedCount)
    // Fetch JSON data from the server
    fetch("/static/classes.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(jsonData => {
            for (const data of jsonData) {
                if (data.classes[className] && data.classes[className] >= specifiedCount) {
                    // Create a new list item
                    // const listItem = document.createElement("li");
                    // listItem.innerHTML = `${className}: ${data.classes[className]} at ${data.timestamp}`;

                    // // Append the list item to the currentAlertSetting div
                    // const currentAlertSettingDiv = document.getElementById("currentAlertSetting");
                    // currentAlertSettingDiv.appendChild(listItem);

                    // Update the chat-list-child div
                    let count = parseInt(localStorage.getItem("listItemCount")) || 0;
                    const textColor = count % 2 === 0 ? "white" : "yellow";



                    const chatListChild = document.querySelector(".alerts");
                    // const newDiv = document.querySelector(".alerts");

                    const newDiv = document.createElement("div");
                    newDiv.innerHTML = `${className}: ${data.classes[className]} at ${data.timestamp}`;
                    newDiv.style.color = textColor;
                    chatListChild.appendChild(newDiv);
                }
            }
        })
        .catch(error => {
            console.error("Error fetching or parsing JSON data:", error);
        });
}



function updateCurrentAlertSetting(className, specifiedCount) {
    const currentAlertSettingDiv = document.getElementById("currentAlertSetting");
    // currentAlertSettingDiv.background = "red";
    // Check if there is an existing ordered list
    const existingOlElement = currentAlertSettingDiv.querySelector("ol");

    // Initialize or retrieve the count from localStorage
    let count = parseInt(localStorage.getItem("listItemCount")) || 0;

    // Increment the count
    count++;

    // Save the updated count to localStorage
    localStorage.setItem("listItemCount", count);

    // Determine the text color based on the count
    const textColor = count % 2 === 0 ? "white" : "yellow";

    if (existingOlElement) {
        // If an ordered list already exists, append a new list item to it
        const liClassCount = document.createElement("li");
        liClassCount.textContent = `Class: ${className} Count: ${specifiedCount}`;
        liClassCount.style.color = textColor;
        // liClassCount.style.background = "red";
        existingOlElement.appendChild(liClassCount);
    } else {
        // If there is no existing ordered list, create a new one and append it to the div
        const olElement = document.createElement("ol");
        const liClassCount = document.createElement("li");
        liClassCount.textContent = `Class: ${className} Count: ${specifiedCount}`;
        liClassCount.style.color = textColor;
        olElement.appendChild(liClassCount);
        currentAlertSettingDiv.appendChild(olElement);
    }
}


// Other functions or code can be added as needed
