const express = require('express');
const bodyParser = require('body-parser');
const cameraRoutes = require('./routes/cameraRoutes');
const databaseConfig = require('./config/database'); // Import your database configuration
const cors = require('cors'); // Import the cors middleware

const app = express();
app.use(cors());

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/cameras', cameraRoutes);

const PORT = process.env.PORT || 3000;

// Your database configuration is already handled in the config.js file
// No need to connect to the database here

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
