/*
* ProfessionalCtrl is a controller class that is responsible for processing
* the HTTP requests received at the Professional RESTful endpoints from our API
* and returns the responses to the client in JSON format.
*/

/* eslint-disable camelcase */

// Section where we declare the necessary imports for this module
const { tbl_Professional, tbl_DentalSpecialties } = require('../models/index')

// Controller class ProfessionalCtrl
module.exports = class ProfessionalCtrl {
  // CRUD: (C) Create a new professional record in the database. Data passed in body request
  static async apiAddProfessional (req, res) {
    try {
      // Before adding rofessional verify medical specialty passed is valid.
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

  // Available only in the backend for users with administration privileges
  static async apiGetAllProfessionals (req, res) {
    try {
      const response = await tbl_Professional.findAll({
        order: [['id', 'DESC']],
        attributes: ['id', 'specialties_id']
      })

      if (!response) {
        return res.status(404).json({
          sucess: false,
          message: 'There are no registered professional at this time!'
        })
      }

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
}
