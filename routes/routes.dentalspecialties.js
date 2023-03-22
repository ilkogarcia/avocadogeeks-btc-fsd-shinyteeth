const express = require('express')
const router = express.Router()
const DentSpeCtrl = require('../controllers/dentalspecialtiesControllers')
const verifyToken = require('../middlewares/verifyToken')
const isAdmin = require('../middlewares/isAdmin')

router.post('/dentalspecialties', verifyToken, isAdmin, DentSpeCtrl.apiAddDentSpec)
router.put('/dentalspecialties/:id', verifyToken, isAdmin, DentSpeCtrl.apiUpdateDentSpec)
router.get('/dentalspecialties/:id', verifyToken, isAdmin, DentSpeCtrl.apiGetDentSpecById)
router.delete('/dentalspecialties/:id', verifyToken, isAdmin, DentSpeCtrl.apiDeleteDentSpec)
router.get('/dentalspecialties', verifyToken, DentSpeCtrl.apiGetAllDentSpec)

module.exports = router
