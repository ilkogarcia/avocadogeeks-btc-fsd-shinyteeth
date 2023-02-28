const express = require('express')
const router = express.Router()
const UsersCtrl = require('../controllers/usersController')
// const verifyToken = require("../middlewares/verifyToken");

router.get('/users', UsersCtrl.apiGetAllUsers)
// router.post("/products", ProductCtrl.apiCreateProduct);
// router.get("/products/:id", ProductCtrl.apiGetProductById);
// router.put("/products/:id", verifyToken ,ProductCtrl.apiUpdateProduct);
// router.delete("/products/:id", ProductCtrl.apiDeleteProduct);

module.exports = router
