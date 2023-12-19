const mongoose = require('mongoose');

// Your MongoDB connection string
const MONGODB_URI = 'mongodb://localhost/camera-registration-systemm';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

module.exports = db;
