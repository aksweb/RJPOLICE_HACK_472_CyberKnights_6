const Camera = require('../models/Camera');

// Controller logic for camera-related operations
const cameraController = {

    registerOwner: async (req, res) => {
        try {
            // Extract camera data from the request body
            const ownerData = req.body;

            // Create a new camera instance with the received data
            const newOwner = new Camera(ownerData);

            // Save the camera to the database
            await newOwner.save();

            // Respond with a success message
            res.status(201).json({ message: 'Camera registered successfully' });
        } catch (error) {
            // Handle errors and respond with an error message
            if (error.code === 11000) {
                // Duplicate key error (unique constraint violation)
                res.status(400).json({ error: 'Duplicate entry for ownerEmail or ownerPhone.' });
            } else {
                // Other errors
                console.error('Error registering camera:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
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
