/* eslint-disable camelcase */

// Import bcrypt, a password-hashing function based on the Blowfish cipher
const bcrypt = require('bcrypt')
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
      const response = await tbl_User.create({
        email,
        password_hash
      })

      return res.status(201).json({ message: 'User signup successfully.', response })
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  // Authentication API: SignIn
  static async apiSignIn (req, res) {
    try {
      // Get user email and password from body request
      const { email, password } = req.body

      // Find user with requested email
      const response = await tbl_User.findOne({ where: { email } })
      if (!response) {
        return res.status(400).json({ message: 'Something has gone wrong!. Try again' })
      } else {
        const isMatch = bcrypt.compareSync(password, response.password_hash)
        if (!isMatch) {
          return res.status(400).json({ message: 'Something has gone wrong!. Try again' })
        }
      }
      return res.status(201).json({ message: 'Login success. Access granted!!!', response })
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }
}
