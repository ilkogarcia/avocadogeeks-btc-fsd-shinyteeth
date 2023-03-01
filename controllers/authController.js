/* eslint-disable camelcase */

// Import bcrypt, a password-hashing function based on the Blowfish cipher
const bcrypt = require('bcrypt')
// Import Sequelize models used
const { tbl_User } = require('../models/index')

module.exports = class AuthCtrl {
  // Authentication API: SignUp
  static async apiSignUp (req, res) {
    try {
      const { email, password } = req.body
      const password_hash = bcrypt.hashSync(password, 10)
      const response = await tbl_User.create({
        email,
        password_hash
      })
      return res.json(response)
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  // Authentication API: SignIn
  static async apiSignIn (req, res) {
    return res.status(200).json('¡Estas iniciando sesión con tu usuario!')
  }
}
