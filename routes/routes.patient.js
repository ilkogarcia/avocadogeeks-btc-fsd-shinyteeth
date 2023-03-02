const express = require('express')
const router = express.Router()
const PatientCtrl = require('../controllers/patientsControllers')
const verifyToken = require('../middlewares/verifyToken')

router.post('/patient', verifyToken, PatientCtrl.apiAddPatient)
router.get('/patient/:id', verifyToken, PatientCtrl.apiGetPatientById)
router.put('/patient/:id', verifyToken, PatientCtrl.apiUpdatePatient)
router.delete('/patient/:id', verifyToken, PatientCtrl.apiDeletePatient)
router.get('/patient', verifyToken, PatientCtrl.apiGetAllPatient)

module.exports = router
