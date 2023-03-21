const router = require('express').Router()
const UserCtrl = require('../controllers/usersController')
const verifyToken = require('../middlewares/verifyToken')
const hasPrivileges = require('../middlewares/hasPrivileges')
const isAdmin = require('../middlewares/isAdmin')

router.post('/api/users', verifyToken, hasPrivileges, UserCtrl.apiAddUser) // CRUD: (C) Create
router.get('/api/users/:id', verifyToken, hasPrivileges, UserCtrl.apiGetUserById) // CRUD: (R) Retrieve
router.put('/api/users/:id', verifyToken, hasPrivileges, UserCtrl.apiUpdateUser) // CRUD: (U) Update
router.delete('/api/users/:id', verifyToken, isAdmin, UserCtrl.apiDeleteUser) // CRUD: (D) Delete
router.get('/api/users', verifyToken, isAdmin, UserCtrl.apiGetAllUsers) // Requiere admin privileges

module.exports = router
