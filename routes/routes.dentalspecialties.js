const express = require('express')
const router = express.Router()
const DentSpeCtrl = require('../controllers/dentalspecialtiesControllers')

router.post('/dentalspecialties', DentSpeCtrl.apiAddDentSpec)
router.get('/dentalspecialties', DentSpeCtrl.apiGetAllDentSpec)

module.exports = router
