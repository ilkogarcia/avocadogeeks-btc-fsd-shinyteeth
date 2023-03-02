// Import Express package
const express = require('express')
const router = express.Router()

// Import Patient controller
const PatientCtrl = require('../controllers/patientsControllers')

// Import middleware functions
const verifyToken = require('../middlewares/verifyToken')
const isPatient = require('../middlewares/isPatient')

// router.post('/patient', PatientCtrl.apiAddPatient)
router.get('/patient', verifyToken, isPatient, PatientCtrl.apiGetAllPatient)

module.exports = router
