/*
* Professional API Endpoints. This gateway allows you to connect any client
* application with the Profesional management processes implemented in the
* backend of our application.
*/

// Import Express package
const express = require('express')
const router = express.Router()

// Import Patient controller
const ProfessionalCtrl = require('../controllers/professionalsController')

// Import middleware functions
const verifyToken = require('../middlewares/verifyToken')
// const isAdmin = require('../middlewares/isAdmin')
// const hasPrivileges = require('../middlewares/hasPrivileges')

/*
* Endpoints. format: router.<Http-Method>(<URL:id>, <Middleware1>...<MiddlewareN>, <Controller> )
* <Http-Method> Refers to the HTTP method that route will respond to, or be invoked for.
* <url[:id]> Refers to the path listed above the route in a route decorator. Also will be the URL
* a user sees when navigating to this area of the site
* [:id] is a placeholder for where a specific object's unique ID will be placed.
* <Controller> Refers to the name of the route method in the controller. Most indicate purpose
* details what each route is responsible for.
*/
router.post('/professionals', verifyToken, ProfessionalCtrl.apiAddProfessional)
router.get('/professionals/:id', verifyToken, ProfessionalCtrl.apiGetProfessionalById)
router.put('/professionals/:id', verifyToken, ProfessionalCtrl.apiUpdateProfessional)
router.delete('/professionals/:id', verifyToken, ProfessionalCtrl.apiDeleteProfessional)
router.get('/professionals', verifyToken, ProfessionalCtrl.apiGetAllProfessionals)
router.post('/professionals/user/', verifyToken, ProfessionalCtrl.apiGetProfessionalUserData)

module.exports = router
