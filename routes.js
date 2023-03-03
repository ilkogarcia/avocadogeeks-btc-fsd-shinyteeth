// Import Express using commonjs
const { Router } = require('express')
const router = Router()

// Authentication and Authorization Endpoints
const authRoutes = require('./routes/routes.auth')
router.use(authRoutes)

// User Management Endpoints
const userRoutes = require('./routes/routes.users')
router.use(userRoutes)

// DentalSpecialties management API
const dentSpecRoutes = require('./routes/routes.dentalspecialties')
router.use(dentSpecRoutes)

// Patient management API
const patientRoutes = require('./routes/routes.patient')
router.use(patientRoutes)

// Professional management API
const professionalRoutes = require('./routes/routes.professionals')
router.use(professionalRoutes)

// API main
router.get('/api', async (req, res) => {
  return res.json({ message: 'Hello, Wellcom to Shiny Teeth ✌️' })
})

module.exports = router
