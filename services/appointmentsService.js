/*
* This class is responsible for the business logic related to appointment management.
* Its methods are there to facilitate code reuse between the different implemented controllers.
*/

/* eslint-disable camelcase */

// Section where we declare the necessary imports for this module
const { tbl_Appointment } = require('../models/index')

// Service class AppointmentService
module.exports = class AppointmentService {
  // CRUD: (C) Create a new appointment record in the database. Data passed in body request
  static addAppointment = async (data) => {
    try {
      const result = await tbl_Appointment.create(data)
      return result
    } catch (error) {
      return error.message
    }
  }

  // CRUD: (R) Retrive appointment data from database.
  static getAppointmentById = async (id) => {
    try {
      const result = await tbl_Appointment.findByPk(id)
      return result
    } catch (error) {
      return error
    }
  }
}
