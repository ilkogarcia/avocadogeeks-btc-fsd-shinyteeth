const express = require('express')
const router = express.Router()
const PatientCtrl = require('../controllers/patientsControllers')

// router.post('/patient', PatientCtrl.apiAddPatient)
router.get('/patient', PatientCtrl.apiGetAllPatient)

module.exports = router
