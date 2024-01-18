const express = require('express');
const router = express.Router();
const cameraController = require('../controllers/cameraController');

// Define your camera routes
router.post('/loginOwner', cameraController.loginOwner);
router.post('/registerOwner', cameraController.registerOwner);
router.post('/register', cameraController.registerCamera);
router.get('/locations', cameraController.getAllCameras);
router.put('/updateDetails/:ownerPhone', cameraController.updateCameraDetails);
// router.get('./')


module.exports = router;
