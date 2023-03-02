// Import Express package
const express = require('express')
const router = express.Router()

// Import Patient controller
const PatientCtrl = require('../controllers/patientsControllers')

// Import middleware functions
const verifyToken = require('../middlewares/verifyToken')
const isProfessional = require('../middlewares/isProfessional')
const isAdmin = require('../middlewares/isAdmin')


router.post('/patient', verifyToken, isProfessional, PatientCtrl.apiAddPatient)
router.get('/patient/:id', verifyToken, PatientCtrl.apiGetPatientById)
router.put('/patient/:id', verifyToken, isProfessional, PatientCtrl.apiUpdatePatient)
router.delete('/patient/:id', verifyToken, isAdmin, PatientCtrl.apiDeletePatient)
router.get('/patient', verifyToken, isAdmin, PatientCtrl.apiGetAllPatient)

module.exports = router
