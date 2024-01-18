const express = require('express');
const router = express.Router();
const cameraController = require('../controllers/cameraController');

// Define your camera routes
router.post('/register', cameraController.registerCamera);
router.get('/locations', cameraController.getAllCameras);

module.exports = router;
