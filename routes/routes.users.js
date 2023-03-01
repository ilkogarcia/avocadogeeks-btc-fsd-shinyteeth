const express = require('express')
const router = express.Router()
const UserCtrl = require('../controllers/usersController')
// const verifyToken = require("../middlewares/verifyToken");

router.get('/users', UserCtrl.apiGetAllUsers)
router.get('/users/:id', UserCtrl.apiGetUserById)
router.delete('/users/:id', UserCtrl.apiDeleteUser)
router.post('/users', UserCtrl.apiAddUser)
router.put('/users/:id', UserCtrl.apiUpdateUser)

module.exports = router
