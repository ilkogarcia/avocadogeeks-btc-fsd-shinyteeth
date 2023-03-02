/* eslint-disable camelcase */

const { Op } = require('sequelize')
const { tbl_User } = require('../models/index')
module.exports = class UserCtrl {
  // CRUD: (C) Create a new user record in the database. Data passed in body request
  static async apiAddUser (req, res) {
    try {
      const newUser = {
        role_id: req.body.role_id,
        patient_id: req.body.patient_id,
        professional_id: req.body.professional_id,
        first_name: req.body.first_name,
        middle_name: req.body.middle_name,
        last_name: req.body.last_name,
        mobile_phone: req.body.mobile_phone,
        email: req.body.email,
        password_hash: req.body.password_hash
      }
      const response = await tbl_User.create(newUser)

      return res.status(201).json({
        sucess: true,
        message: 'User added successfully!',
        user: response.id
      })
    } catch (error) {
      return res.status(500).json({
        sucess: false,
        message: 'Something has gone wrong!',
        error: error.message
      })
    }
  }

  // CRUD: (U) Update a user record in the database. Data passed in body request
  static async apiUpdateUser (req, res) {
    try {
      const response = await tbl_User.update({
        role_id: req.body.role_id,
        patient_id: req.body.patient_id,
        professional_id: req.body.professional_id,
        first_name: req.body.first_name,
        middle_name: req.body.middle_name,
        last_name: req.body.last_name,
        mobile_phone: req.body.mobile_phone,
        email: req.body.email,
        password_hash: req.body.password_hash
      }, { where: { id: req.params.id } })

      return res.status(201).json({
        sucess: true,
        message: 'User updated successfully!',
        user: response.id
      })
    } catch (error) {
      return res.status(500).json({
        sucess: false,
        message: 'Something has gone wrong!',
        error: error.message
      })
    }
  }

  // CRUD: (R) Retrive user data from database. The user ID received in request parameter
  static async apiGetUserById (req, res) {
    try {
      const response = await tbl_User.findByPk(req.params.id, {
        attributes: ['id', 'first_name', 'middle_name', 'last_name', 'mobile_phone', 'email', 'createdAt', 'updatedAt']
      })

      if (!response) {
        return res.status(404).json({
          sucess: false,
          message: 'User does not exist in database!'
        })
      }

      return res.status(201).json({
        sucess: true,
        message: 'User retrieved successfully!',
        user: response
      })
    } catch (error) {
      return res.status(500).json({
        sucess: false,
        message: 'Something has gone wrong!',
        error: error.message
      })
    }
  }

  // CRUD: (D) Delete from database the user record. The user ID received in request parameter
  static async apiDeleteUser (req, res) {
    try {
      const response = await tbl_User.destroy({ where: { id: req.params.id } })
      if (!response) {
        return res.status(404).json({
          sucess: false,
          message: 'User does not exist in database!'
        })
      }
      return res.status(201).json({
        sucess: true,
        message: 'User deleted successfully!'
      })
    } catch (error) {
      return res.status(500).json({
        sucess: false,
        message: 'Something has gone wrong!',
        error: error.message
      })
    }
  }

  // This method is available only in the backend and for users with administration privileges
  static async apiGetAllUsers (req, res) {
    try {
      const response = await tbl_User.findAll({
        order: [['id', 'DESC']],
        attributes: ['id', 'first_name', 'middle_name', 'last_name', 'mobile_phone', 'email', 'createdAt', 'updatedAt'],
        where: { role_id: { [Op.ne]: 4 } }
      })

      if (!response) {
        return res.status(404).json({
          sucess: false,
          message: 'There are no registered users at this time!'
        })
      }

      return res.status(201).json({
        sucess: true,
        message: 'Some users info recovered successfully!',
        user_list: response
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
