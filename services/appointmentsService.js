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

  // CRUD: (U) Update an appointment record in the database.
  static async apiUpdateAppointment (req, res) {
    try {
      // Check record exists in database and user is authorized to update it
      const appointment = await tbl_Appointment.findByPk(req.params.id)
      if (!appointment) {
        return res.status(404).json({
          sucess: false,
          message: `Appointment id: ${req.params.id} not found.`
        })
      }
      if (appointment.patient_id !== req.patientId) {
        return res.status(403).json({
          sucess: false,
          message: `Access id: ${req.params.id} forbidden.`
        })
      }
      // We proceed to update the registry
      const result = await tbl_Appointment.update({
        professional_id: req.body.professional_id,
        treatment_id: req.body.treatment_id,
        appointment_on: req.body.appointment_on,
        start_at: req.body.start_at,
        end_at: req.body.end_at
      },
      { where: { id: req.params.id } },
      { returning: true },
      { plain: true })
      if (!result) {
        return res.status(404).json({
          sucess: false,
          message: `It has been impossible to update your appointment id: ${req.params.id}.`
        })
      }
      return res.status(201).json({
        sucess: true,
        message: `Appointment id: ${req.params.id} updated successfully.`
      })
    } catch (error) {
      return res.status(500).json({
        sucess: false,
        message: 'Something has gone wrong. Error!',
        error: error.message
      })
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

  // CRUD: (D) Delete from database the appointment record.
  static async apiDeleteAppointment (req, res) {
    try {
      // Check record exists in database and user is authorized to delete it
      const appointment = await tbl_Appointment.findByPk(req.params.id)
      if (!appointment) {
        return res.status(404).json({
          sucess: false,
          message: `Appointment id: ${req.params.id} not found.`
        })
      }
      if (appointment.patient_id !== req.patientId) {
        return res.status(403).json({
          sucess: false,
          message: `Access id: ${req.params.id} forbidden.`
        })
      }
      // We proceed to delete the registry
      const result = await tbl_Appointment.destroy({ where: { id: req.params.id } })
      if (!result) {
        return res.status(404).json({
          sucess: false,
          message: `It has been impossible to delete your appointment id: ${req.params.id}.`
        })
      }
      return res.status(201).json({
        sucess: true,
        message: `Appointment id: ${req.params.id} deleted successfully.`,
      })
    } catch (error) {
      return res.status(500).json({
        sucess: false,
        message: 'Something has gone wrong. Error!',
        error: error.message
      })
    }
  }

  // Get the list of future appointments
  static async apiGetAllAppointments (req, res) {
    try {
      // Searches all the appointments of the patient in the database
      const appointments = await tbl_Appointment.findAll({
        where: { patient_id: req.patientId },
        order: [['appointment_on', 'ASC']]
      })
      // Check no appointments found
      if (appointments.length === 0) {
        return res.status(404).json({
          sucess: false,
          message: 'Sorry! - You do not have future appointments.'
        })
      }
      // Return appoiment list
      return res.status(201).json({
        sucess: true,
        message: 'Sucess! - These are the appointments that you have arranged for the future.',
        appointments
      })
    } catch (error) {
      return res.status(500).json({
        sucess: false,
        message: 'Error! - Something has gone wrong.',
        error
      })
    }
  }
}
