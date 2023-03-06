/*
* Patient API Endpoints. This gateway allows you to connect any client
* application with the Patient management processes implemented in the
* backend of our application.
*/

// Import Express package
const express = require('express')
const router = express.Router()

// Import Patient controller
const PatientCtrl = require('../controllers/patientsControllers')

// Import middleware functions
const verifyToken = require('../middlewares/verifyToken')
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

router.post('/api/patients/', verifyToken, isProfessional, PatientCtrl.apiAddPatient)
router.get('/api/patients/:id', verifyToken, PatientCtrl.apiGetPatientById)
router.put('/api/patients/:id', verifyToken, isProfessional, PatientCtrl.apiUpdatePatient)
router.delete('/api/patients/:id', verifyToken, isAdmin, PatientCtrl.apiDeletePatient)
router.get('/api/patients/', verifyToken, isAdmin, PatientCtrl.apiGetAllPatient)

module.exports = router
