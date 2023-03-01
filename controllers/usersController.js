/* eslint-disable camelcase */
// Importa el modelo Sequelize que usamos para gestionar la tabla Producto
const { tbl_User } = require('../models/index')
module.exports = class UserCtrl {
  // CRUD: (C) Create a new user record in the database. Data passed in body request
  static async apiAddUser (req, res) {
    try {
      const newUserData = {
        role_id: req.role_id,
        patient_id: req.patient_id,
        professional_id: req.professional_id,
        first_name: req.first_name,
        middle_name: req.middle_name,
        last_name: req.last_name,
        mobile_phone: req.mobile_phone,
        email: req.email,
        password_hash: req.password_hash
      }
      const response = await tbl_User.create(newUserData)
      return res.json(response)
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  // CRUD: (U) Update a user record in the database. Data passed in body request
  static async apiUpdateUser (req, res) {
    try {
      const userId = req.params.id
      const newUserData = {
        role_id: req.role_id,
        patient_id: req.patient_id,
        professional_id: req.professional_id,
        first_name: req.first_name,
        middle_name: req.middle_name,
        last_name: req.last_name,
        mobile_phone: req.mobile_phone,
        email: req.email,
        password_hash: req.password_hash
      }
      const response = await tbl_User.update({ newUserData }, { where: { id: userId } })
      return res.json(response)
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  // CRUD: (R) Retrive user data from database. The user ID received in request parameter
  static async apiGetUserById (req, res) {
    try {
      const userId = req.params.id
      const userProfile = await tbl_User.findByPk(userId)
      if (!userProfile) {
        return res.status(404).json('¡Este usuarios no existe en la base de datos!')
      } else {
        return res.json(userProfile)
      }
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  // CRUD: (D) Delete from database the user record. The user ID received in request parameter
  static async apiDeleteUser (req, res) {
    try {
      const userId = req.params.id
      const userProfile = await tbl_User.destroy({ where: { id: userId } })
      if (!userProfile) {
        return res.status(404).json('¡Este usuarios no existe en la base de datos!')
      } else {
        return res.json(userProfile)
      }
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  // Just for testing... NOT SECURE METHOD... Remove
  static async apiGetAllUsers (req, res) {
    try {
      const usersList = await tbl_User.findAll()
      if (!usersList) {
        return res.status(404).json('¡No existen usuarios en la base de datos!')
      } else {
        return res.json(usersList)
      }
    } catch (error) {
      return res.status(500).json({ error })
    }
  }
}
