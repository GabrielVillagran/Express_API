// se va a trabajar con objetos express
const { response } = require('express')
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
    console.log(`GET Explorers V1 API ${new Date()}`)

    // lista de explorers
    const explorer = { id: 1, name: "ExplorerZ" } //objeto JS
    const explorer1 = { id: 2, name: "ExplorerA" } //objeto JS
    const explorer2 = { id: 3, name: "ExplorerB" } //objeto JS
    const explorer3 = { id: 4, name: "ExplorerC" } //objeto JS
    const explorers = [explorer, explorer1, explorer2, explorer3]

    //se realiza un metodo html para poder realizar un request
    // como se esta realizando un metodo get se debe de obtener un codigo html para indicar el estado de la peticion
    // HTTP CODE STATUS: 200 => correcto
    response.status(200).json(explorer)
})

// se realiza un query pattern para buscar un id 
app.get('/v1/explorers:id', (req, res) => {
    console.log(`GET Explorers by ID V1 API ${new Date()}`)

    // lista de explorers
    const explorer = { id: 1, name: "ExplorerZ" } //objeto JS
    const explorer1 = { id: 2, name: "ExplorerA" } //objeto JS
    const explorer2 = { id: 3, name: "ExplorerB" } //objeto JS
    const explorer3 = { id: 4, name: "ExplorerC" } //objeto JS
    const explorers = [explorer, explorer1, explorer2, explorer3]

    //se realiza un metodo html para poder realizar un request
    // como se esta realizando un metodo get se debe de obtener un codigo html para indicar el estado de la peticion
    // HTTP CODE STATUS: 200 => correcto
    response.status(200).json(explorer)
})

// metodo POST
app.post('/V1/explorers/', (req, res) => {
    console.log(`POST Explorers V1 API ${new Date()}`)
        // se agrego la logica para persistir
    console.log(req.body) //parametros del request
    res.status(201).json({ message: "creado exsitosamente" })
})

// inicializacion de la app
app.listen(port, () => {
    console.log('app is running!!!!')
})