const router = require('express').Router()
const AuthCtrl = require('../controllers/authController')

router.post('/api/signup', AuthCtrl.apiSignUp)
router.post('/api/signin', AuthCtrl.apiSignIn)

module.exports = router
