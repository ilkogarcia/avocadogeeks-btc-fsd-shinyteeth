const express = require('express')
const router = express.Router()
const DentTreatCtrl = require('../controllers/dentaltreatmentsControllers')
const verifyToken = require('../middlewares/verifyToken')
const isAdmin = require('../middlewares/isAdmin')

router.post('/dentaltreatments', verifyToken, isAdmin, DentTreatCtrl.apiAddDentTreat)
router.put('/dentaltreatments/:id', verifyToken, isAdmin, DentTreatCtrl.apiUpdateDentTreat)
router.get('/dentaltreatments/:id', verifyToken, DentTreatCtrl.apiGetDentTreatById)
router.delete('/dentaltreatments/:id', verifyToken, isAdmin, DentTreatCtrl.apiDeleteDentTreat)
router.get('/dentaltreatments', verifyToken, DentTreatCtrl.apiGetAllDentTreat)

module.exports = router
