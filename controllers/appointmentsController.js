/*
* AppointmentCtrl is a controller class that is responsible for processing
* the HTTP requests received at the Professional RESTful endpoints from our API
* and returns the responses to the client in JSON format.
*/

/* eslint-disable camelcase */

// Section where we declare the necessary imports for this module
const { tbl_Appointment } = require('../models/index')

// Controller class ProfessionalCtrl
module.exports = class AppointmentCtrl {
  // CRUD: (C) Create a new appointment record in the database. Data passed in body request
  static async apiAddAppointment (req, res) {
    try {
      const appointment = await tbl_Appointment.create({
        patient_id: req.body.patient_id,
        professional_id: req.body.professional_id,
        treatment_id: req.body.treatment_id,
        appointment_on: req.body.appointment_on,
        start_at: req.body.start_at,
        end_at: req.body.end_at
      })
      return res.status(201).json({
        sucess: true,
        message: 'Appointment added successfully!',
        appointment
      })
    } catch (error) {
      return res.status(500).json({
        sucess: false,
        message: 'Something has gone wrong!',
        error
      })
    }
  }

  // CRUD: (U) Update an appointment record in the database.
  static async apiUpdateAppointment (req, res) {
    console.log('Estas en apiUpdateAppointment')
  }

  // CRUD: (R) Retrive appointment data from database.
  static async apiGetAppointmentById (req, res) {
    console.log('Estas en apiGetAppointmentById')
  }

  // CRUD: (D) Delete from database the appointment record.
  static async apiDeleteAppointment (req, res) {
    console.log('Estas en apiDeleteAppointment')
  }

  // Get the list of future appointments
  static async apiGetAllAppointments (req, res) {
    try {
      const response = await tbl_Appointment.findAll({
        order: [['appointment_on', 'ASC']],
        where: { id: req.patientID }
      })

      if (!response) {
        return res.status(404).json({
          sucess: false,
          message: 'You do not have future appointments!'
        })
      }

      return res.status(201).json({
        sucess: true,
        message: 'Future appointments!',
        user_list: response
      })
    } catch (error) {
      return res.status(500).json({
        sucess: false,
        message: 'Something has gone wrong!',
        error
      })
    }
  }
}
