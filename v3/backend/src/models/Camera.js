const mongoose = require('mongoose');

const cameraSchema = new mongoose.Schema({
    model: String,
    resolution: String,
    recordingCapabilities: String,
    ownerName: String,
    ownerPhone: {
        type: String,  // Change the type to String
        unique: true,
    },
    password: String,
    visibilityRange: Number,
    lat: Number,
    lng: Number,
    aadhar: Number,
    ip: String,
});

const Camera = mongoose.model('Camera', cameraSchema);

module.exports = Camera;
