// se va a trabajar con objetos express
const express = require('express')
    // creacion de app express
const app = express()
app.use(express.json()) // usaremos json para trabajar
    // asignacion de puerto a trabajar
const port = 3000

// creacion de routes
app.get('/', (req, res) => {
    // respuesta que se tendra
    res.send("Hola, Bienvenido a LaunchX");
})

// inicializacion de la app
app.listen(port, () => {
    console.log('app is running!!!!')
})