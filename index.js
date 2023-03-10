/*
* Shiny Teeth App Main
*/

/* eslint-disable linebreak-style */

// Import Express using commonjs
const express = require('express')
const server = express()

// Import and configure dotenv using commonjs
require('dotenv').config()

// Using JSON to process the body in received requests
server.use(express.json())

// Import routes defined in our API interface
const routes = require('./routes.js')
server.use(routes)

// Initializing connection to DB
const db = require('./db.js')
const PORT = process.env.PORT || 3000

db.then(() => {
  server.listen(PORT, () => console.log(`Application is listening at port ${PORT}`))
})
  .catch((err) => console.log(err.message))
