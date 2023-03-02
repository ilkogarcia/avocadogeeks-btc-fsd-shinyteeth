/* eslint-disable camelcase */

// Import .env file using commonjs
require('dotenv').config()

// Import jsonwebtoken (JWTs) package to support authorization and information exchange
const jwt = require('jsonwebtoken')

// Verify token middleware function
const verifyToken = (req, res, next) => {
  try {
    // Retrieve token from the request header
    const authorization = req.headers.authorization
    if (!authorization) {
      return res.status(400).json({ message: 'Invalid token!' })
    }

    // eslint-disable-next-line no-unused-vars
    const [strategy, token] = authorization.split(' ')

    // Decode and verify token
    const decodedData = jwt.verify(token, process.env.SECRET)

    // We add the user data to the request
    req.userId = decodedData.userId
    req.roleId = decodedData.roleId

    next()
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = verifyToken
