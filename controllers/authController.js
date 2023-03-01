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
    try {
      const { email, password } = req.body
      const user = await tbl_User.findOne({ where: { email } })
      if (!user) {
        return res.send('Something has gone wrong!. Try again')
      } else {
        const isMatch = bcrypt.compareSync(password, user.password_hash)
        if (!isMatch) {
          return res.send('Something has gone wrong!. Try again')
        }
      }
      return res.status(200).send('Login success. Access granted!!!')
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }
}
