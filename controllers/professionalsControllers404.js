/* eslint-disable camelcase */

const { tbl_Professional } = require('../models/index')
module.exports = class ProfessionalCtrl {
  // CRUD: (C) Create a new Professional record in the database. Data passed in body request
  static async apiAddProfessional (req, res) {
    try {
      const newProfessional = {
        specialties_id: req.body.specialties_id
      }
      const response = await tbl_Professional.create(newProfessional)

      return res.status(201).json({
        sucess: true,
        message: 'Professional added successfully!',
        professional: response.id
      })
    } catch (error) {
      return res.status(500).json({
        sucess: false,
        message: 'Something has gone wrong!',
        error: error.message
      })
    }
  }

  // CRUD: (U) Update a Professional record in the database. Data passed in body request
  static async apiUpdateProfessional (req, res) {
    try {
      const response = await tbl_Professional.update({
        specialties_id: req.body.specialties_id
      }, { where: { id: req.params.id } })

      return res.status(201).json({
        sucess: true,
        message: 'Professional updated successfully!',
        professional: response.id
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
  static async apiGetProfessionalByid (req, res) {
    try {
      const response = await tbl_Professional.findByPK(req.params.id, {
        attributes: ['id', 'specialties_id']
      })
      if (!response) {
        return res.status(404).json({
          scess: false,
          message: 'Professional does not exist in database!'
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
}
