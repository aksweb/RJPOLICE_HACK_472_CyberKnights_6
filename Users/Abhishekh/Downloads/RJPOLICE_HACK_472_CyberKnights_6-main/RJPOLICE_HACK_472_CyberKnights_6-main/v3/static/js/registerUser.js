function registerUser(event) {
    event.preventDefault();

    // Function to get form field values by ID
    const getValue = (id) => document.getElementById(id).value;

    const ownerPhone = getValue('ownerPhone');
    const password = getValue('password');

    const ownerData = {
        ownerPhone: ownerPhone,
        password: password,
    };

    // AJAX request to send data to the backend
    const backendURL = 'http://localhost:3000';
    const endpoint = '/api/cameras/registerOwner';

    fetch(`${backendURL}${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ownerData),
    })
        .then(response => response.json())
        .then(data => {
            // Check if the response has an 'error' field indicating duplicate ownerPhone
            if (data.error && data.error.includes('Duplicate ownerPhone')) {
                alert('Duplicate ownerPhone. Please use a unique phone number.');
            } else {
                alert('Owner registered successfully');
                console.log('Owner registered successfully:', data);
                // You can redirect to another page or show a success message here
            }
        })
        .catch(error => {
            alert('Error Registering User');
            console.error('Error registering owner:', error);
            // Handle the error (e.g., show an error message to the user)
        });
}
