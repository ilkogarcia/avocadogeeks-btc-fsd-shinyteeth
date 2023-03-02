/*
* Middleware that validates if a user has the Professional role.
* A successful check will give access to the functionalities
* available only for patients.
*/

/* eslint-disable camelcase */

// Import patient Sequelize DB model
const { tbl_User } = require('../models')

// Function that checks if token belongs to a user that also is patient
const isProfessional = async (req, res, next) => {
  try {
    // Request will be denied if user does not have a professional role
    if (req.roleId !== 3) {
      return res.status(401).json({
        sucess: false,
        message: 'Unauthorized! - User is not a professional'
      })
    }

    // Look for the user in DB according ID included in the request
    const response = await tbl_User.findByPk(req.userId, {
      attributes: ['professional_id']
    })

    // Request will be denied if user not found
    if (!response) {
      return res.status(401).json({
        sucess: false,
        message: 'Unauthorized! - User not found'
      })
    }

    // Request will be denied if no reference to the patient record is found.
    if (response.professional_id === null) {
      return res.status(401).json({
        sucess: false,
        message: 'Unauthorized! - Professional record not found'
      })
    }

    // If everything has gone well we add professional ID to the request
    req.professionalID = response.professional_id

    next()
  } catch (error) {
    return res.status(401).json({
      sucess: false,
      message: 'Unauthorized! - Something has gone wrong',
      error: error.message
    })
  }
}

module.exports = isProfessional
