const express = require('express')
const router = express.Router()
const DentSpeCtrl = require('../controllers/dentalspecialtiesControllers')
const verifyToken = require('../middlewares/verifyToken')

router.post('/dentalspecialties', verifyToken, DentSpeCtrl.apiAddDentSpec)
router.put('/dentalspecialties/:id', verifyToken, DentSpeCtrl.apiUpdateDentSpec)
router.get('/dentalspecialties/:id', verifyToken, DentSpeCtrl.apiGetDentSpecById)
router.delete('/dentalspecialties/:id', verifyToken, DentSpeCtrl.apiDeleteDentSpec)
router.get('/dentalspecialties', verifyToken, DentSpeCtrl.apiGetAllDentSpec)

module.exports = router
