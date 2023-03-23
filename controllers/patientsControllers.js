/*
* PatientCtrl is a controller class that is responsible for processing
* the HTTP requests received at the Patient RESTful endpoints from our API
* and returns the responses to the client in JSON format.
*/

/* eslint-disable camelcase */
// Section where we declare the necessary imports for this module
const { tbl_Patient } = require('../models/index')
const { tbl_User } = require('../models/index')

// Controller class PatientCtrl
module.exports = class PatientCtrl {
  // CRUD: (C) Create a new Patient record in the database. Data passed in body request
  static async apiAddPatient (req, res) {
    try {
      const newPatientData = {
        ehr_number: req.body.ehr_number
      }
      const response = await tbl_Patient.create(newPatientData)

      return res.status(201).json({
        sucess: true,
        message: 'Sucess! - Patient added successfully',
        user: response.id
      })
    } catch (error) {
      return res.status(500).json({
        succes: false,
        message: 'Error! - Something has gone wrong',
        error: error.message
      })
    }
  }

  // CRUD: (U) Update a Patient record in the database. Data passed in body request
  static async apiUpdatePatient (req, res) {
    try {
      const response = await tbl_Patient.update({
        ehr_number: req.body.ehr_number
      }, { where: { id: req.params.id } })
      return res.status(201).json({
        sucess: true,
        message: 'Sucess! - Patient update successfully.',
        professional: response.id
      })
    } catch (error) {
      return res.status(500).json({
        succes: false,
        message: 'Error! - Something has gone wrong',
        error: error.message
      })
    }
  }

  // CRUD: (R) Retrive user data from database. The user ID received in request parameter
  static async apiGetPatientById (req, res) {
    try {
      const response = await tbl_Patient.findByPk(req.params.id, {
        attributes: ['id', 'ehr_number']
      })
      if (!response) {
        return res.status(404).json({
          sucess: false,
          message: 'Sorry! - Patient does not exist in database'
        })
      }
      return res.status(201).json({
        sucess: true,
        message: 'Sucess! - Patient retrieved successfully',
        patient: response
      })
    } catch (error) {
      return res.status(500).json({
        sucess: false,
        message: 'Error! - Something has gone wrong',
        error: error.message
      })
    }
  }

  // CRUD: (D) Delete from database the user record. The user ID received in request parameter
  static async apiDeletePatient (req, res) {
    try {
      const response = await tbl_Patient.destroy({ where: { id: req.params.id } })
      if (!response) {
        return res.status(404).json({
          sucess: false,
          message: 'Sorry! - Patient does not exist in database'
        })
      }
      return res.status(201).json({
        sucess: true,
        message: 'Sucess! - Patient delete successfully.'
      })
    } catch (error) {
      return res.status(500).json({
        sucess: false,
        message: 'Error! - Something has gone wrong.',
        error: error.message
      })
    }
  }

  // Get all patient in database...
  static async apiGetAllPatient (req, res) {
    try {
      const response = await tbl_Patient.findAll()
      if (!response) {
        return res.status(404).json({
          sucess: false,
          message: 'Sorry! - There are no registeres patient at thid time'
        })
      }
      return res.status(201).json({
        sucess: true,
        message: 'Sucess! - Some Patient info recovered successfully',
        patient_list: response
      })
    } catch (error) {
      return res.status(500).json({
        sucess: false,
        message: 'Error! - Something has gone wrong',
        error: error.message
      })
    }
  }

  // Retrive user data from database. The user ID received in request parameter
  static async apiGetPatientUserData (req, res) {
    try {
      const response = await tbl_User.findOne({
        attributes: ['id', 'first_name', 'middle_name', 'last_name', 'mobile_phone', 'email', 'createdAt', 'updatedAt'],
        where: { patient_id: req.body.patient_id }
      })
      if (!response) {
        return res.status(404).json({
          sucess: false,
          message: 'Sorry! - Patient does not have user info in database'
        })
      }
      return res.status(201).json({
        sucess: true,
        message: 'Sucess! - Patient user info retrieved successfully',
        patient: response
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
