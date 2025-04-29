require("dotenv").config();
const express = require("express");
const ConnectDB = require("./config/db");
const app = express(); //Inicializa el servidor express.


app.use(express.json());

//Rutas


const PORT = process.env.PORT || 3005
app.listen(PORT, async () => { //Escucha al puerto.
    await ConnectDB();
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
})