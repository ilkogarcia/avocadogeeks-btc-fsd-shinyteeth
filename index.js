/* eslint-disable linebreak-style */
// Import and configure express using commonjs
const express = require('express')
const server = express() // Create an instance of the express class

// Import and configure dotenv using commonjs
require('dotenv').config() // Require and configure dotenv package

// Using JSON to process the body in received requests
server.use(express.json())

// Import routes defined in our API interface
const routes = require('./routes.js')
server.use('/api', routes)

const db = require('./db.js')
const PORT = process.env.PORT // Rescue environment variable for port where the service must run

db.then(() => {
  server.listen(PORT, () => console.log(`Application is listening at port ${PORT}`))
})
  .catch((err) => console.log(err.message))
