const Camera = require('../models/Camera');

// Controller logic for camera-related operations
const cameraController = {
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
            const cameras = await Camera.find({}, 'lat lng');

            // Respond with the extracted lat and lng
            res.status(200).json(cameras);
        } catch (error) {
            // Handle errors and respond with an error message
            console.error('Error fetching camera locations:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

};

module.exports = cameraController;
