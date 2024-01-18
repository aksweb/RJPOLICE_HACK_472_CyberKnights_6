function loginUser(event) {
    event.preventDefault();

    // Function to get form field values by ID
    const getValue = (id) => document.getElementById(id).value;

    const ownerPhone = getValue('ownerPhone');
    const password = getValue('password');

    const loginData = {
        ownerPhone: ownerPhone,
        password: password,
    };

    // AJAX request to send login data to the backend
    const backendURL = 'http://localhost:3000';
    const endpoint = '/api/cameras/loginOwner'; // Assuming you have this endpoint on your backend

    fetch(`${backendURL}${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
    })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                // Handle login error
                alert('Login failed. Please check your credentials.');
                console.error('Login failed:', data.error);
            } else {
                // Successful login
                alert('Login successful');
                console.log('Login successful:', data);

                // Save the email to local storage
                const userPhone = data.userPhone; // Assuming the backend sends the email in the response
                console.log("phone: ", userPhone);
                localStorage.setItem('userPhone', loginData.ownerPhone);
                console.log("from back : ", localStorage.getItem('userPhone'));
                window.location.href = '/registration';
                
                //dont use like this here
                // window.location.href = "{{url_for('updatedetail')}}";
            }   
        })
        .catch(error => {
            alert('Error during login');
            console.error('Error during login:', error);
            // Handle the error (e.g., show an error message to the user)
        });
}
