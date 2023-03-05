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
// Sign-UP : Users (patients) selfservice registration first step
  static async signUp (req, res) {
    try {
      // Get user email and password from body request
      const { email, password } = req.body

      // Generate password HASH using bCrypt method
      const password_hash = bcrypt.hashSync(password, 10)

      // Create new user register in database
      const user = await tbl_User.create({
        role_id: 2,
        email,
        password_hash
      })

      if (!user) {
        return res.status(400).json({
          sucess: false,
          message: 'Something has gone wrong!'
        })
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

  // Sign-In : Users (patients) easy login process
  static async signIn (req, res) {
    try {
      // Get user email and password from body request
      const { email, password } = req.body

      // Find user by email on database
      const user = await tbl_User.findOne({
        where: { email },
        attributes: ['id', 'role_id', 'patient_id', 'professional_id', 'password_hash']
      })
      if (!user) {
        return res.status(400).json({
          sucess: false,
          message: 'Something has gone wrong!'
        })
      }

      // Validate the supplied password
      const isMatch = bcrypt.compareSync(password, user.password_hash)
      if (!isMatch) {
        return res.status(400).json({
          sucess: false,
          message: 'Something has gone wrong!'
        })
      }

      // Generate a web token for future auth (HMAC SHA256)
      const token = jwt.sign(
        {
          userId: user.id,
          roleId: user.role_id,
          patientId: user.patient_id,
          professionalId: user.professional_id
        },
        process.env.SECRET,
        { expiresIn: '2h' }
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

  // Users (patients) update profile process
  static async updateProfile (req, res) {
    try {
      const result = await tbl_User.update({
        role_id: 2,
        first_name: req.body.first_name,
        middle_name: req.body.middle_name,
        last_name: req.body.last_name,
        mobile_phone: req.body.mobile_phone,
        email: req.body.email
      }, { where: { id: req.userId } })
      if (!result) {
        return res.status(404).json({
          sucess: false,
          message: `It has been impossible to update your appointment id: ${req.userId}.`
        })
      }
      return res.status(201).json({
        sucess: true,
        message: `User profile with id: ${req.userId} updated successfully.`
      })
    } catch (error) {
      return res.status(500).json({
        sucess: false,
        message: 'Something has gone wrong. Error!',
        error
      })
    }
  }

  // Users (patients) password reset process.
  static async resetPassword (req, res) {
    try {
      // Get user email and password from body request
      const { old_password, new_password } = req.body

      // Find user by userID coded on token
      const userFind = await tbl_User.findByPk(req.userId,
        { attributes: ['id', 'role_id', 'patient_id', 'professional_id', 'password_hash'] })
      if (!userFind) {
        return res.status(400).json({
          sucess: false,
          message: `Impossible to find a users with id: ${req.userFind}`
        })
      }

      // Validate the old password
      const isMatch = bcrypt.compareSync(old_password, userFind.password_hash)
      if (!isMatch) {
        return res.status(400).json({
          sucess: false,
          message: 'The change could not be made. Unauthorized!'
        })
      }

      // If the credentials have been successfully validated, we can make the change
      // Generate password HASH using bCrypt method
      const new_password_hash = bcrypt.hashSync(new_password, 10)

      // Create new user register in database
      const userUpdated = await tbl_User.update({
        password_hash: new_password_hash
      }, { where: { id: req.userId } })
      if (!userUpdated) {
        return res.status(400).json({
          sucess: false,
          message: 'Something has gone wrong!'
        })
      }

      return res.status(201).json({
        sucess: true,
        message: `User id ${req.userId} password reset successfully. You must log in again!`
      })
    } catch (error) {
      console.log(error)
    }
  }
}
