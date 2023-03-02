/* eslint-disable camelcase */
const { tbl_Patient, tbl_User } = require('../models/index')

module.exports = class PatientCtrl {
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
