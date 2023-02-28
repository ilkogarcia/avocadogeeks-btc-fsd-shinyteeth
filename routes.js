// Incluimos el paquete Express
const { Router } = require("express");
const router = Router();

// Aqui estamos creando nuestra ruta principal de la API
router.get("/", (req, res) => res.send("Welcome to Shiny Teeth"));

// Esta es la ruta a la API de Usuarios
const userRoutes = require("./routes/routes.users");
router.use(userRoutes);

// Aqui se exporta la ruta para su uso en otros modulos
module.exports = router;
