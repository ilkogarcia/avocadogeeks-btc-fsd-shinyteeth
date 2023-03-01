// Import Express using commonjs
const { Router } = require('express')
const router = Router()

// API main
router.get('/', (req, res) => res.send('Welcome to Shiny Teeth'))

// User management API
const userRoutes = require('./routes/routes.users')
router.use(userRoutes)

module.exports = router
