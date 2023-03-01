const router = require('express').Router()
const UserCtrl = require('../controllers/usersController')
const verifyToken = require('../middlewares/verifyToken');

router.post('/users', verifyToken, UserCtrl.apiAddUser) // CRUD: (C) Create
router.get('/users/:id', verifyToken, UserCtrl.apiGetUserById) // CRUD: (R) Retrieve
router.put('/users/:id', verifyToken, UserCtrl.apiUpdateUser) // CRUD: (U) Update
router.delete('/users/:id', verifyToken, UserCtrl.apiDeleteUser) // CRUD: (D) Delete
router.get('/users', verifyToken, UserCtrl.apiGetAllUsers) // Not secure... remove?

module.exports = router
