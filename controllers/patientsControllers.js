/* eslint-disable camelcase */
const { tbl_Patient } = require('../models/index')
module.exports = class PatientCtrl {
  // CRUD: (C) Create a new Patient record in the database. Data passed in body request
  static async apiAddPatient (req, res) {
    try {
      const newPatientData = {
        ehr_number: req.body.ehr_number
      }
      const response = await tbl_Patient.create(newPatientData)
      return res.json(response)
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  // CRUD: (U) Update a Patient record in the database. Data passed in body request
  static async apiUpdatePatient (req, res) {
    try {
      const response = await tbl_Patient.update({
        ehr_number: req.body.ehr_number
      }, { where: { id: req.params.id } })
      return res.json(response)
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  // CRUD: (R) Retrive user data from database. The user ID received in request parameter
  static async apiGetPatientById (req, res) {
    try {
      const response = await tbl_Patient.findByPk(req.params.id)
      if (!response) {
        return res.status(404).json('¡No existe este paciente en la base de datos!')
      } else {
        return res.json(response)
      }
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  // CRUD: (D) Delete from database the user record. The user ID received in request parameter
  static async apiDeletePatient (req, res) {
    try {
      const response = await tbl_Patient.destroy({ where: { id: req.params.id } })
      if (!response) {
        return res.status(404).json('¡No existe este paciente en la base de datos!')
      } else {
        return res.json(response)
      }
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  // Testing method
  static async apiGetAllPatient (req, res) {
    try {
      const patientsList = await tbl_Patient.findAll()
      if (!patientsList) {
        return res.status(404).json('¡No existe este Paciente en la base de datos!')
      } else {
        return res.json(patientsList)
      }
    } catch (error) {
      return res.status(500).json({ error })
    }
  }
}
