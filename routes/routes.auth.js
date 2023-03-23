/*
* Authentication & authoroization API Endpoints.
* Trustworthy and secure sign-up & sign-in process providing a simple
* and easy experience for new users that made them more confident to
* provide their information on your site
*/

// Import Express package
const router = require('express').Router()

// Import Auth controller
const AuthCtrl = require('../controllers/authController')

// Import middleware functions
const verifyToken = require('../middlewares/verifyToken')

/*
* Endpoints. format: router.<Http-Method>(<URL:id>, <Middleware1>...<MiddlewareN>, <Controller> )
* <Http-Method> Refers to the HTTP method that route will respond to, or be invoked for.
* <url[:id]> Refers to the path listed above the route in a route decorator. Also will be the URL
* a user sees when navigating to this area of the site
* [:id] is a placeholder for where a specific object's unique ID will be placed.
* <Controller> Refers to the name of the route method in the controller. Most indicate purpose
* details what each route is responsible for.
*/

// Users (patients) selfservice registration first step
router.post('/signup', AuthCtrl.signUp)

// Users (patients) login process
router.post('/signin', AuthCtrl.signIn)

// Users (patients) update profile process
router.put('/updateprofile', verifyToken, AuthCtrl.updateProfile)

// Users (patients) password reset process.
router.put('/resetpass', verifyToken, AuthCtrl.resetPassword)

module.exports = router
