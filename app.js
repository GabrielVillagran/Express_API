// se va a trabajar con objetos express
const express = require('express')
    // creacion de app express
const app = express()
app.use(express.json()) // usaremos json para trabajar
    // asignacion de puerto a trabajar
const port = 3000

// Creacion de un endpoint
// metodos http => GET, POST, PUT, DELETE
// metodo GET
app.get('/v1/explorers', (req, res) => {
    console.log(`API Explorers GET all request ${new Date()}`)

    // lista de explorers
    const explorer = { id: 1, name: "ExplorerZ" } //objeto JS
    const explorer1 = { id: 2, name: "ExplorerA" } //objeto JS
    const explorer2 = { id: 3, name: "ExplorerB" } //objeto JS
    const explorer3 = { id: 4, name: "ExplorerC" } //objeto JS
    const explorers = [explorer, explorer1, explorer2, explorer3]

    //se realiza un metodo html para poder realizar un request
    // como se esta realizando un metodo get se debe de obtener un codigo html para indicar el estado de la peticion
    // HTTP CODE STATUS: 200 => correcto
    res.status(200).json(explorer)
})

// se realiza un query pattern para buscar un id 
app.get('/v1/explorers:id', (req, res) => {
    console.log(`API Explorers GET all request ${new Date()}`)
    console.log(`API Explorers GET all request by ID ${req.params.id()}`)

    // lista de explorers
    const explorer0 = { id: 1, name: "ExplorerZ" } //objeto JS
    const explorer1 = { id: 2, name: "ExplorerA" } //objeto JS
    const explorer2 = { id: 3, name: "ExplorerB" } //objeto JS
    const explorer3 = { id: 4, name: "ExplorerC" } //objeto JS
    const explorer = { id: 1, name: "ExplorerZ" }

    //se realiza un metodo html para poder realizar un request
    // como se esta realizando un metodo get se debe de obtener un codigo html para indicar el estado de la peticion
    // HTTP CODE STATUS: 200 => correcto
    res.status(200).json(explorer)
})

// metodo POST
app.post('/V1/explorers/', (req, res) => {
    console.log(`API Explorer POST request ${new Date()}`)

    const requestBody = req.body //parametros del cliente
    res.status(201).json({ message: "creado exsitosamente" })
})

// metodo PUT
app.put('/V1/explorers/:id', (req, res) => {
    console.log(`API Explorers PUT request ${new Date()}`)

    const requestBody = req.body //parametros del cliente
    res.status(200).json({ message: "Actualizado exsitosamente" })
})

// metodo delete
app.delete('/V1/explorers/:id', (req, res) => {
    console.log(`API Explorers DELETE request ${new Date()}`)
    console.log(`DELETE Explorers by ID ${req.params.id()}`)

    // parametros del cliente
    const requestBody = req.body

    // se debe agregar la logica para la eliminacion del registro enviado
    res.status(200).json({ message: "Eliminado exsitosamente" })
})

// inicializacion de la app
app.listen(port, () => {
    console.log('app is running!!!!')
})