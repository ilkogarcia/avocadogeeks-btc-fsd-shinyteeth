/*
* ProfessionalCtrl is a controller class that is responsible for processing
* the HTTP requests received at the Professional RESTful endpoints from our API
* and returns the responses to the client in JSON format.
*/

/* eslint-disable camelcase */

// Section where we declare the necessary imports for this module
const { tbl_Professional, tbl_DentalSpecialties } = require('../models/index')
const { tbl_User } = require('../models/index')

// Controller class ProfessionalCtrl
module.exports = class ProfessionalCtrl {
  // CRUD: (C) Create a new professional record in the database. Data passed in body request
  static async apiAddProfessional (req, res) {
    try {
      // Before adding professional verify medical specialty passed is valid.
      const specialties = await tbl_DentalSpecialties.findByPk(req.body.specialties_id)
      if (!specialties) {
        return res.status(404).json({
          sucess: false,
          message: 'Failed professional registration. Unrecognized medical specialty.!'
        })
      }

      // Insert professional with all data received
      const professional = await tbl_Professional.create({
        specialties_id: req.body.specialties_id
      })

      return res.status(201).json({
        sucess: true,
        message: 'Professional added successfully!',
        professional: professional.id
      })
    } catch (error) {
      return res.status(500).json({
        sucess: false,
        message: 'Something has gone wrong!',
        error: error.message
      })
    }
  }

  // CRUD: (U) Update a professional record in the database.
  static async apiUpdateProfessional (req, res) {
    try {
      // The verification record exists in the database and only the Admin is authorized to update it.
      const response = await tbl_Professional.update({
        specialties_id: req.body.specialties_id
      }, { where: { id: req.params.id } })

      return res.status(201).json({
        sucess: true,
        message: 'Professional update successfully!',
        professional: response.id
      })
    } catch (error) {
      return res.status(500).json({
        sucess: false,
        message: 'Something has gone wrong',
        error: error.message
      })
    }
  }

  // CRUD: (R) Retrive professional data from database.
  static async apiGetProfessionalById (req, res) {
    try {
      const response = await tbl_Professional.findByPk(req.params.id, {
        attributes: ['id', 'specialties_id']
      })
      if (!response) {
        return res.status(404).json({
          sucess: false,
          message: 'Professional does not exist in database'
        })
      }

      return res.status(201).json({
        sucess: true,
        message: 'Professional retrieved successfully!',
        professional: response
      })
    } catch (error) {
      return res.status(500).json({
        sucess: false,
        message: 'Something has gone wrong',
        error: error.message
      })
    }
  }

  // CRUD: (D) Delete from database the professional record.
  static async apiDeleteProfessional (req, res) {
    try {
      const response = await tbl_Professional.destroy({ where: { id: req.params.id } })
      if (!response) {
        return res.status(404).json({
          sucess: false,
          message: 'Professional does not exist in database!'
        })
      }
      return res.status(201).json({
        sucess: true,
        message: 'Professional deleted successfully!'
      })
    } catch (error) {
      return res.status(500).json({
        sucess: false,
        message: 'Something has gone wrong!',
        error: error.message
      })
    }
  }

  // This method i available only in the backend and for users with administration privileges
  static async apiGetAllProfessionals (req, res) {
    try {
      // Search all professionals in the database.
      const response = await tbl_Professional.findAll({
        order: [['id', 'DESC']],
        attributes: ['id', 'specialties_id']
      })
      // Check no professionals found
      if (!response) {
        return res.status(404).json({
          sucess: false,
          message: 'There are no registered professional at this time!'
        })
      }
      // Return professioanls list
      return res.status(201).json({
        sucess: true,
        message: 'Some professional info recovered successfully!',
        professional_list: response
      })
    } catch (error) {
      return res.status(500).json({
        sucess: false,
        message: 'Something has gone wrong!',
        error: error.message
      })
    }
  }

  // Retrive user data from database. The user ID received in request parameter
  static async apiGetProfessionalUserData (req, res) {
    try {
      const response = await tbl_User.findOne({
        attributes: ['id', 'first_name', 'middle_name', 'last_name', 'mobile_phone', 'email', 'createdAt', 'updatedAt'],
        where: { professional_id: req.body.professional_id }
      })
      if (!response) {
        return res.status(404).json({
          sucess: false,
          message: 'Sorry! - Professional does not have user info in database'
        })
      }
      return res.status(201).json({
        sucess: true,
        message: 'Sucess! - Professional user info retrieved successfully',
        professional: response
      })
    } catch (error) {
      return res.status(500).json({
        sucess: false,
        message: 'Error! - Something has gone wrong',
        error: error.message
      })
    }
  }
}
