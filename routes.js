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

// DentalTreatments management API
const dentTreatRoutes = require('./routes/routes.dentaltreatments')
router.use(dentTreatRoutes)

// Patient management API
const patientRoutes = require('./routes/routes.patient')
router.use(patientRoutes)

// Professional management API
const professionalRoutes = require('./routes/routes.professionals')
router.use(professionalRoutes)

// Appointment management API
const appointmentRoutes = require('./routes/routes.appointments')
router.use(appointmentRoutes)

// API main
router.get('/', async (req, res) => {
  return res.json({ message: 'Hello, Welcome to Shiny Teeth ✌️' })
})

module.exports = router
