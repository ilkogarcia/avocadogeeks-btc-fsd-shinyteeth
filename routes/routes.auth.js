const router = require('express').Router()
const AuthCtrl = require('../controllers/authController')

router.post('/signup', AuthCtrl.apiSignUp)
router.post('/signin', AuthCtrl.apiSignIn)

module.exports = router
