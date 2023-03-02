// Import Express package
const express = require('express')
const router = express.Router()

// Import Patient controller
const PatientCtrl = require('../controllers/patientsControllers')

// Import middleware functions
const verifyToken = require('../middlewares/verifyToken')
const isProfessional = require('../middlewares/isProfessional')

router.post('/patient', verifyToken, isProfessional, PatientCtrl.apiAddPatient)
router.get('/patient/:id', verifyToken, PatientCtrl.apiGetPatientById)
router.put('/patient/:id', verifyToken, isProfessional, PatientCtrl.apiUpdatePatient)
router.delete('/patient/:id', verifyToken, isProfessional, PatientCtrl.apiDeletePatient)
router.get('/patient', verifyToken, isProfessional, PatientCtrl.apiGetAllPatient)

module.exports = router
