const router = require('express').Router()
const ProfessionalCtrl = require('../controllers/professionalsControllers404')
const verifyToken = require('../middlewares/verifyToken')

router.post('/professional', verifyToken, ProfessionalCtrl.apiAddProfessional)
router.put('/professional/:id', verifyToken, ProfessionalCtrl.apiUpdateProfessional)
router.get('/professional/:id', verifyToken, ProfessionalCtrl.apiGetProfessionalByid)

module.exports = router
