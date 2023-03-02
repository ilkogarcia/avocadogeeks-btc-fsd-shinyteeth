/* eslint-disable camelcase */

// Import .env file using commonjs
require('dotenv').config()

// Import bcrypt package with a password-hashing function based on the Blowfish cipher
const bcrypt = require('bcrypt')
// Import jsonwebtoken (JWTs) package to support authorization and information exchange
const jwt = require('jsonwebtoken')
// Import Sequelize models used
const { tbl_User } = require('../models/index')

module.exports = class AuthCtrl {
  // Authentication API: SignUp
  static async apiSignUp (req, res) {
    try {
      // Get user email and password from body request
      const { email, password } = req.body

      // Generate password HASH using bCrypt method
      const password_hash = bcrypt.hashSync(password, 10)

      // Create new user register in database
      const user = await tbl_User.create({
        email,
        password_hash
      })

      if (!user) {
        return res.status(400).json({ message: 'Something has gone wrong!' })
      }

      // Put together the answer that we are going to return
      return res.status(201).json({
        sucess: true,
        message: 'Signup successfully!',
        user: user.id
      })
    } catch (error) {
      return res.status(500).json({
        sucess: false,
        message: 'Something has gone wrong!',
        error: error.message
      })
    }
  }

  // Authentication API: SignIn
  static async apiSignIn (req, res) {
    try {
      // Get user email and password from body request
      const { email, password } = req.body

      // Find user with requested email
      const user = await tbl_User.findOne({ where: { email } })
      if (!user) {
        return res.status(400).json({ message: 'Something has gone wrong!. Try again' })
      } else {
        const isMatch = bcrypt.compareSync(password, user.password_hash)
        if (!isMatch) {
          return res.status(400).json({ message: 'Something has gone wrong!. Try again' })
        }
      }

      // Generate a web token with default (HMAC SHA256)
      const token = jwt.sign(
        {
          userId: user.id,
          email: user.email,
          roleId: user.role_id
        },
        process.env.SECRET,
        { expiresIn: '1h' }
      )

      return res.status(201).json({
        sucess: true,
        message: 'Access granted!',
        token
      })
    } catch (error) {
      return res.status(500).json({
        sucess: false,
        message: 'Something has gone wrong!',
        error: error.message
      })
    }
  }
}
