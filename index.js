// Import and configure express using commonjs
const express = require('express');     // Express package import
const server = express();               // Create an instance of the express class

// Import and configure dotenv using commonjs
require('dotenv').config()              // Require and configure dotenv package 

// Using JSON to process the body in received requests
server.use(express.json());

// Import routes defined in our API interface
const routes = require('./routes');
server.use('/api', routes); 

// Assign port to connection and a callback function that warns me when the service is live
const PORT = process.env.PORT;          // Rescue environment variable for port where the service must run
server.listen(PORT, () => {
    console.log(`Server is live at localhost: ${PORT}`)
});