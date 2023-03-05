/*
* Middleware that validates if a user has the Admin role.
*/

/* eslint-disable camelcase */

// Function checks if token belongs to a user with admin role
const isAdmin = async (req, res, next) => {
  try {
    // Request will be denied if user does not have an admin role
    if (req.roleId !== 4) {
      return res.status(401).json({
        sucess: false,
        message: 'Unauthorized! - Insufficient privileges.'
      })
    }

    next()
  } catch (error) {
    return res.status(401).json({
      sucess: false,
      message: 'Unauthorized! - Something has gone wrong.',
      error: error.message
    })
  }
}

module.exports = isAdmin
