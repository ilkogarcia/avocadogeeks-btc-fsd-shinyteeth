/*
* Security middleware for authentication using jsonwebtoken.
* We add a middleware function to validate a JSON Web Token (JWT)
* and return a 401 Unauthorized error if not.
*/

/* eslint-disable camelcase */

// We import the .env file that contains all the global variables of the project
require('dotenv').config()

// Import jsonwebtoken (JWTs) package that support authorization and information exchange
const jwt = require('jsonwebtoken')

// Import tbl_User Sequelize DB model
const { tbl_User } = require('../models')

// Middleware function that validate a JSON Web Token (JWT)
const verifyToken = async (req, res, next) => {
  try {
    // Retrieve token from the request header
    const authorization = req.headers.authorization
    if (!authorization) {
      return res.status(401).json({
        sucess: false,
        message: 'Unauthorized! - Missing token.'
      })
    }

    // eslint-disable-next-line no-unused-vars
    const [strategy, token] = authorization.split(' ')

    // Decode and verify the token passed
    const tokenData = jwt.verify(token, process.env.SECRET)

    // Request will be denied if user id decoded from token is not found
    const user = await tbl_User.findByPk(tokenData.userId)
    if (!user) {
      return res.status(401).json({
        sucess: false,
        message: 'Unauthorized! - User not found.'
      })
    }

    // If everything went well, we add the user data to the request
    console.log(tokenData)

    req.userId = tokenData.userId
    req.roleId = tokenData.roleId
    req.patientId = tokenData.patientId
    req.professionalId = tokenData.professionalId

    next()
  } catch (error) {
    switch (error.name) {
      case 'TokenExpiredError':
        return res.status(401).json({
          sucess: false,
          message: 'Unauthorized! - Token is expired',
          expiredAt: error.expiredAt
        })
      case 'NotBeforeError':
        return res.status(401).json({
          sucess: false,
          message: 'Unauthorized! - Token is not active',
          date: error.date
        })
      default:
        return res.status(401).json({
          sucess: false,
          message: 'Unauthorized! - Token error',
          error: error.message
        })
    }
  }
}

module.exports = verifyToken
