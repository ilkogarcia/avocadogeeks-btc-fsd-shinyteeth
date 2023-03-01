const express = require('express')
const router = express.Router()
const DentSpeCtrl = require('../controllers/dentalspecialtiesControllers')

router.post('/dentalspecialties', DentSpeCtrl.apiAddDentSpec)
router.put('/dentalspecialties/:id', DentSpeCtrl.apiUpdateDentSpec)
router.get('/dentalspecialties/:id', DentSpeCtrl.apiGetDentSpecById)
router.delete('/dentalspecialties/:id', DentSpeCtrl.apiDeleteDentSpec)
router.get('/dentalspecialties', DentSpeCtrl.apiGetAllDentSpec)

module.exports = router
