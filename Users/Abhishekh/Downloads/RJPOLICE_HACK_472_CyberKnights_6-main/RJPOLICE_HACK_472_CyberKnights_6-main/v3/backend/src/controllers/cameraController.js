const Camera = require('../models/Camera');
const axios = require('axios');

// import fetch from 'node-fetch';


// Controller logic for camera-related operations
const cameraController = {

    // Function to perform reverse geocoding
    async getLocationName(latitude, longitude) {
        const apiKey = 'AIzaSyDtgpJc-aZE3yL9pC82NE4MefQHHkdbfM8';
        const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

        try {
            // Use Axios instead of fetch
            const response = await axios.get(apiUrl);
            const data = response.data;

            if (data.status === 'OK' && data.results.length > 0) {
                return data.results[0].formatted_address;
            } else {
                console.error('Error retrieving location name:', data.status);
                return 'Unknown Location';
            }
        } catch (error) {
            console.error('Error fetching location details:', error);
            return 'Unknown Location';
        }
    },

    updateCameraDetails: async (req, res) => {
        try {
            // Extract ownerPhone from the request parameters
            const ownerPhone = req.params.ownerPhone;

            // Check if the camera with the specified ownerPhone exists in the database
            const existingCamera = await Camera.findOne({ ownerPhone });

            if (!existingCamera) {
                return res.status(404).json({ error: 'Camera not found' });
            }

            // Extract updated data from the request body
            const updatedData = req.body;

            // Update the camera details
            const updatedCamera = await Camera.findOneAndUpdate({ ownerPhone }, updatedData, { new: true });

            // Respond with the updated camera details
            res.status(200).json(updatedCamera);
        } catch (error) {
            // Handle other errors
            console.error('Error updating camera details:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    registerOwner: async (req, res) => {
        try {
            // Extract owner data from the request body
            const ownerData = req.body;

            // Check if the ownerPhone already exists in the database
            const existingOwner = await Camera.findOne({ ownerPhone: ownerData.ownerPhone });

            if (existingOwner) {
                // Respond with an error message for duplicate ownerPhone
                res.status(400).json({ error: 'Duplicate ownerPhone. Please use a unique phone number.' });
            } else {
                // Create a new owner instance with the received data
                const newOwner = new Camera(ownerData);

                // Save the owner to the database
                await newOwner.save();

                // Respond with a success message
                res.status(201).json({ message: 'Owner registered successfully' });
            }
        } catch (error) {
            // Handle other errors
            console.error('Error registering owner:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    loginOwner: async (req, res) => {
        try {
            // Extract login data from the request body
            const loginData = req.body;

            // Check if the owner exists in the database
            const existingOwner = await Camera.findOne({ ownerPhone: loginData.ownerPhone, password: loginData.password });

            if (existingOwner) {
                // Respond with a success message for successful login
                res.status(200).json({ message: 'Login successful', ownerPhone: existingOwner.ownerPhone });

                // res.status(200).json({ message: 'Login successful' });
            } else {
                // Respond with an error message for failed login
                res.status(401).json({ error: 'Invalid credentials. Please check your ownerPhone and password.' });
            }
        } catch (error) {
            // Handle other errors
            console.error('Error during login:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },



    registerCamera: async (req, res) => {
        try {
            // Extract camera data from the request body
            const cameraData = req.body;

            // Create a new camera instance with the received data
            const newCamera = new Camera(cameraData);

            // Save the camera to the database
            await newCamera.save();

            // Respond with a success message
            res.status(201).json({ message: 'Camera registered successfully' });
        } catch (error) {
            // Handle errors and respond with an error message
            console.error('Error registering camera:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    getAllCameras: async (req, res) => {
        try {
            // Fetch camera locations from the database
            const cameras = await Camera.find({}, 'lat lng ownerName ownerPhone ip resolution model recordingCapabilities visibilityRange aadhar');

            // Perform reverse geocoding for each camera
            const camerasWithLocationNames = await Promise.all(
                cameras.map(async (camera) => {
                    const locationName = await cameraController.getLocationName(camera.lat, camera.lng);
                    return {
                        ...camera.toObject(), // Convert Mongoose document to plain object
                        locationName,
                    };
                })
            );
            // cameras = camerasWithLocationNames
            // Respond with the extracted lat and lng
            res.status(200).json(camerasWithLocationNames);
            console.log(camerasWithLocationNames);
        } catch (error) {
            // Handle errors and respond with an error message
            console.error('Error fetching camera locations:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

};

module.exports = cameraController;
