const mongoose = require('mongoose');

// Define your camera schema
const cameraSchema = new mongoose.Schema({
    model: String,
    resolution: String,
    recordingCapabilities: String,
    ownerName: String,
    ownerEmail: String,
    ownerPhone: String,
    visibilityRange: Number,
    lat: Number,
    lng: Number,
});

// Create a Camera model based on the schema
const Camera = mongoose.model('Camera', cameraSchema);

module.exports = Camera;
