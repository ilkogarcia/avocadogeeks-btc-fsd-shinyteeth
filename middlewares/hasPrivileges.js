/*
* Middleware that validates if a user has the Admin role.
*/

/* eslint-disable camelcase */

// Import patient Sequelize DB model
const { tbl_User } = require('../models')

// Function checks if token belongs to a user with admin role
const hasPrivileges = async (req, res, next) => {
  try {
    // Request will be denied if user does not have sufficient privileges
    switch (req.roleId) {
      case 1: {
        return res.status(401).json({
          sucess: false,
          message: 'Unauthorized! - Insufficient privileges.'
        })
      }

      case 2: {
        // Look for the user in DB according ID included in the request
        const user = await tbl_User.findByPk(req.userId, {
          attributes: ['id', 'patient_id']
        })
        // Restrict access to personal information
        if (user.id !== parseInt(req.params.id)) {
          return res.status(401).json({
            sucess: false,
            message: 'Unauthorized! - Information not available to you.'
          })
        }
        // // Request will be denied if no reference to the patient record is found.
        // if (user.patient_id === null) {
        //   return res.status(401).json({
        //     sucess: false,
        //     message: 'Unauthorized! - Patient record not found'
        //   })
        // }
        // If everything has gone well we add patient ID to the request
        req.patientID = user.patient_id
        next()
        break
      }

      case 3: {
        // Look for the user in DB according ID included in the request
        const user = await tbl_User.findByPk(req.userId, {
          attributes: ['id', 'professional_id']
        })
        // // Restrict access to personal information
        // if (user.id !== parseInt(req.params.id)) {
        //   return res.status(401).json({
        //     sucess: false,
        //     message: 'Unauthorized! - Information not available to you.'
        //   })
        // }
        // Request will be denied if no reference to the professional record is found.
        // if (user.professional_id === null) {
        //   return res.status(401).json({
        //     sucess: false,
        //     message: 'Unauthorized! - Professional record not found'
        //   })
        // }
        // If everything has gone well we add professional ID to the request
        req.professionalID = user.professional_id
        next()
        break
      }
      case 4: {
        next()
        break
      }
    }
  } catch (error) {
    return res.status(401).json({
      sucess: false,
      message: 'Unauthorized! - Something has gone wrong.',
      error: error.message
    })
  }
}

module.exports = hasPrivileges
