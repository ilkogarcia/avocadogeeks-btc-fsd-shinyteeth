// Importamos la libreria de Express
const express = require('express');

// Instanciamos una clase de Express en una variable
const server = express(); 

// Declaramos el uso de JSON para procesar el body en peticiones recibidas
server.use(express.json());

// Importamos las rutas de nuestra API
const routes = require('./routes');
server.use('/api', routes); 

// Variable donde almacenamos el puerto donde correrá el servicio
const PORT = 3000;

// Asigno un puerto a la conexión y mediante un callback le indico que me avise cuando se haya realizado.
server.listen(PORT, () => {
    console.log(`Server is live at localhost: ${PORT}`)
});