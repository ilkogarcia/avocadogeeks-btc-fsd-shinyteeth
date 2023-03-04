/*
* Appointments API Endpoints. This gateway allows you to connect any client
* application with the Appointment management processes implemented in the
* backend of our application.
*/

// Import Express package
const express = require('express')
const router = express.Router()

// Import Appointment controller
const AppointmentsCtrl = require('../controllers/appointmentsController')

// Import middleware functions
const verifyToken = require('../middlewares/verifyToken')
const isPatient = require('../middlewares/isPatient')
const isProfessional = require('../middlewares/isProfessional')
const isAdmin = require('../middlewares/isAdmin')


/*
* Endpoints. format: router.<Http-Method>(<URL:id>, <Middleware1>...<MiddlewareN>, <Controller> )
* <Http-Method> Refers to the HTTP method that route will respond to, or be invoked for.
* <url[:id]> Refers to the path listed above the route in a route decorator. Also will be the URL
* a user sees when navigating to this area of the site
* [:id] is a placeholder for where a specific object's unique ID will be placed.
* <Controller> Refers to the name of the route method in the controller. Most indicate purpose
* details what each route is responsible for.
*/

// Appointments endpoints available for patients
router.post('/api/patient/appointments', verifyToken, isPatient, AppointmentsCtrl.apiAddAppointment)
router.get('/api/patient/appointments/:id', verifyToken, isPatient, AppointmentsCtrl.apiGetAppointmentById)
router.put('/api/patient/appointments/:id', verifyToken, isPatient, AppointmentsCtrl.apiUpdateAppointment)
router.delete('/api/patient/appointments/:id', verifyToken, isPatient, AppointmentsCtrl.apiDeleteAppointment)
router.get('/api/patient/appointments', verifyToken, isPatient, AppointmentsCtrl.apiGetAllAppointments)

// Appointments endpoints available for professionals
router.post('/api/professional/appointments', verifyToken, isProfessional, AppointmentsCtrl.apiAddAppointment)
router.get('/api/professional/appointments/:id', verifyToken, isProfessional, AppointmentsCtrl.apiGetAppointmentById)
router.put('/api/professional/appointments/:id', verifyToken, isProfessional, AppointmentsCtrl.apiUpdateAppointment)
router.delete('/api/professional/appointments/:id', verifyToken, isProfessional, AppointmentsCtrl.apiDeleteAppointment)
router.get('/api/professional/appointments', verifyToken, isProfessional, AppointmentsCtrl.apiGetAllAppointments)

// Appointments endpoints available for administrators
router.post('/api/appointments', verifyToken, isAdmin, AppointmentsCtrl.apiAddAppointment)
router.get('/api/appointments/:id', verifyToken, isAdmin, AppointmentsCtrl.apiGetAppointmentById)
router.put('/api/appointments/:id', verifyToken, isAdmin, AppointmentsCtrl.apiUpdateAppointment)
router.delete('/api/appointments/:id', verifyToken, isAdmin, AppointmentsCtrl.apiDeleteAppointment)
router.get('/api/appointments', verifyToken, isAdmin, AppointmentsCtrl.apiGetAllAppointments)

module.exports = router
