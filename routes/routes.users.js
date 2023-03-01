const express = require('express')
const router = express.Router()
const UserCtrl = require('../controllers/usersController')
// const verifyToken = require("../middlewares/verifyToken");

router.post('/users', UserCtrl.apiAddUser) // CRUD: (C) Create
router.get('/users/:id', UserCtrl.apiGetUserById) // CRUD: (R) Retrieve
router.put('/users/:id', UserCtrl.apiUpdateUser) // CRUD: (U) Update
router.delete('/users/:id', UserCtrl.apiDeleteUser) // CRUD: (D) Delete
router.get('/users', UserCtrl.apiGetAllUsers) // Not secure... remove?

module.exports = router
