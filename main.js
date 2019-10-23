'use strict'
// De la libreria node_modules requiero express
const express = require ('express')

const colors = require ('colors')

const app = express()

var port = 8080


//Ejecutar rutas
app.get('/', () => {
    console.log('Entraste a la ruta: /')
})
app.get ('/jessica', () => {
    console.log('Mi nombre es Jessica')
})
app.get ('/backend', (req, res) => {
    res.send('Entraste a /')
})
app.listen(port, () =>{
    console.log (colors.blue ('Felicidades tu API esta corriendo en: http://localhost:8080'))
})