/*
* The DentSpecCtrl controller class is responsible for processing
* HTTP requests received on dental specialties RESTful endpoints of our API
* and returns the responses to the client in JSON format.
*/

/* eslint-disable camelcase */

// In this section we declare the necessary imports for this module
const { tbl_DentalSpecialties } = require('../models/index')

// Controller class DentSpeCtrl
module.exports = class DentSpeCtrl {
  // CRUD: (C) Create a new Dental Specialtie record in the database. Data passed in body request
  static async apiAddDentSpec (req, res) {
    try {
      const newDentSpecData = {
        name: req.body.name,
        description: req.body.description
      }
      const response = await tbl_DentalSpecialties.create(newDentSpecData)

      return res.status(201).json({
        sucess: true,
        message: 'Dental Specialitie added successfully!',
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

  // CRUD: (U) Update a DentalSpecialties record in the database. Data passed in body request
  static async apiUpdateDentSpec (req, res) {
    try {
      const response = await tbl_DentalSpecialties.update({
        name: req.body.name,
        description: req.body.description
      }, { where: { id: req.params.id } })

      return res.status(201).json({
        sucess: true,
        message: 'Dental Specialties updated successfully!',
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

  // CRUD: (R) Retrive DentalSpecialties data from database. The dental specialti ID received in request parameter
  static async apiGetDentSpecById (req, res) {
    try {
      const response = await tbl_DentalSpecialties.findByPk(req.params.id, {
        attributes: ['id', 'name', 'description']
      })
      if (!response) {
        return res.status(404).json({
          sucess: false,
          message: 'Dental Specialtie does not exist in database!'
        })
      }

      return res.status(201).json({
        sucess: true,
        message: 'Dental Specialtie retrieved successfully!',
        DentalSpecialtie: response
      })
    } catch (error) {
      return res.status(500).json({
        sucess: false,
        message: 'Something has gone wrong!',
        error: error.message
      })
    }
  }

  // CRUD: (D) Delete from database the DentalSpecialties record. The DentalSpecialties ID received in request parameter
  static async apiDeleteDentSpec (req, res) {
    try {
      const response = await tbl_DentalSpecialties.destroy({ where: { id: req.params.id } })
      if (!response) {
        return res.status(404).json({
          sucess: false,
          message: 'Dental Specialtie does not exist in database!'
        })
      }
      return res.status(201).json({
        sucess: true,
        message: 'Dental Specialtie deleted successfully!'
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
  static async apiGetAllDentSpec (req, res) {
    try {
      const dentSpecList = await tbl_DentalSpecialties.findAll({
        attributes: ['id', 'name', 'description']
      })
      if (!dentSpecList) {
        return res.status(404).json({
          sucess: false,
          message: 'Something has gone wrong!'
        })
      } else {
        return res.json(dentSpecList)
      }
    } catch (error) {
      return res.status(500).json({ error })
    }
  }
}
