/* eslint-disable camelcase */

// Import bcrypt, a password-hashing function based on the Blowfish cipher
const bcrypt = require('bcrypt')
// Import Sequelize models used
const { tbl_User } = require('../models/index')

module.exports = class AuthCtrl {
  // Authentication API: SignUp
  static async apiSignUp (req, res) {
    return res.status(200).json('¡Estas registrandote como usuario!')
  }

  // Authentication API: SignIn
  static async apiSignIn (req, res) {
    return res.status(200).json('¡Estas iniciando sesión con tu usuario!')
  }
}
