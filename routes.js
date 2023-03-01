// Import Express using commonjs
const { Router } = require('express')
const router = Router()

// API main
router.get('/', (req, res) => res.send('Welcome to Shiny Teeth'))

// Authentication and Authorization Endpoints
const authRoutes = require('./routes/routes.auth')
router.use(authRoutes)

// User Management Endpoints
const userRoutes = require('./routes/routes.users')
router.use(userRoutes)

module.exports = router
