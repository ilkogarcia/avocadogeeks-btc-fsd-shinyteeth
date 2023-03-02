// Import Express package
const express = require('express')
const router = express.Router()

// Import Patient controller
const PatientCtrl = require('../controllers/patientsControllers')

// Import middleware functions
const verifyToken = require('../middlewares/verifyToken')
const isPatient = require('../middlewares/isPatient')

router.post('/patient', verifyToken, PatientCtrl.apiAddPatient)
router.get('/patient/:id', verifyToken, isPatient, PatientCtrl.apiGetPatientById)
router.put('/patient/:id', verifyToken, PatientCtrl.apiUpdatePatient)
router.delete('/patient/:id', verifyToken, PatientCtrl.apiDeletePatient)
router.get('/patient', verifyToken, PatientCtrl.apiGetAllPatient)

module.exports = router
