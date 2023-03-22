/*
* The DentTreatmentCtrl controller class is responsible for processing
* HTTP requests received on dental specialties RESTful endpoints of our API
* and returns the responses to the client in JSON format.
*/

/* eslint-disable camelcase */

// In this section we declare the necessary imports for this module
const { tbl_DentalTreatment } = require('../models/index')

// Controller class DentSpeCtrl
module.exports = class DentTreatmentCtrl {
  // CRUD: (C) Create a new Dental Treatment record in the database. Data passed in body request
  static async apiAddDentTreat (req, res) {
    try {
      const newDentTreatData = {
        specialties_id: req.body.specialtiesid,
        name: req.body.name,
        description: req.body.description,
        standard_duration: req.body.standardduration
      }
      const response = await tbl_DentalTreatment.create(newDentTreatData)

      return res.status(201).json({
        sucess: true,
        message: 'Dental Treatment added successfully!',
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
  static async apiUpdateDentTreat (req, res) {
    try {
      const response = await tbl_DentalTreatment.update({
        specialties_id: req.body.specialtiesid,
        name: req.body.name,
        description: req.body.description,
        standard_duration: req.body.standardduration
      }, { where: { id: req.params.id } })

      return res.status(201).json({
        sucess: true,
        message: 'Dental Treatment updated successfully!',
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
  static async apiGetDentTreatById (req, res) {
    try {
      const response = await tbl_DentalTreatment.findByPk(req.params.id, {
        attributes: ['id', 'specialties_id', 'name', 'description', 'standard_duration']
      })
      if (!response) {
        return res.status(404).json({
          sucess: false,
          message: 'Dental Treatment does not exist in database!'
        })
      }

      return res.status(201).json({
        sucess: true,
        message: 'Dental Treatment retrieved successfully!',
        treatment: response
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
  static async apiDeleteDentTreat (req, res) {
    try {
      const response = await tbl_DentalTreatment.destroy({ where: { id: req.params.id } })
      if (!response) {
        return res.status(404).json({
          sucess: false,
          message: 'Dental Treatment does not exist in database!'
        })
      }
      return res.status(201).json({
        sucess: true,
        message: 'Dental Treatment deleted successfully!'
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
  static async apiGetAllDentTreat (req, res) {
    try {
      const dentTreatList = await tbl_DentalTreatment.findAll({
        attributes: ['id', 'specialties_id', 'name', 'description', 'standard_duration']
      })
      if (!dentTreatList) {
        return res.status(404).json({
          sucess: false,
          message: 'Something has gone wrong!'
        })
      } else {
        return res.json(dentTreatList)
      }
    } catch (error) {
      return res.status(500).json({ error })
    }
  }
}
