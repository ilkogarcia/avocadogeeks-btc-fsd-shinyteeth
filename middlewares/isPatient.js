/*
* Middleware that validates if a user has the patient role.
* A successful check will give access to the functionalities
* available only for patients.
*/

/* eslint-disable camelcase */

// Import patient Sequelize DB model
const { tbl_User } = require('../models')

// Function that checks if token belongs to a user that also is patient
const isPatient = async (req, res, next) => {
  try {
    // Request will be denied if user does not have a patient role
    if (req.roleId !== 2) {
      return res.status(401).json({
        sucess: false,
        message: 'Unauthorized! - User is not a patient'
      })
    }

    // Look for the user in DB according ID included in the request
    const response = await tbl_User.findByPk(req.userId, {
      attributes: ['patient_id']
    })

    // Request will be denied if no reference to the patient record is found.
    if (response.patient_id === null) {
      return res.status(401).json({
        sucess: false,
        message: 'Unauthorized! - Patient record not found'
      })
    }

    // If everything has gone well we add patient ID to the request
    req.patientID = response.patient_id

    next()
  } catch (error) {
    return res.status(401).json({
      sucess: false,
      message: 'Unauthorized! - Something has gone wrong',
      error: error.message
    })
  }
}

module.exports = isPatient
