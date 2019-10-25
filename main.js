'use strict'
// De la libreria node_modules requiero express
const express = require ('express')

const colors = require ('colors')

const bodyParser = require ('body-parser')

//Aplicacion
const app = express()

//Permiso a usuario
app.use((req,res, next)=> {
    res.header ('Acess-Control-Allow-Origin', '*')

    res.header ('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-auth-token')

    res.header ('Acess-Control-Expose-Headers', 'x-auth-token')

    next()
})

app.use (bodyParser.urlencoded({
    extended: true
}))

var port = 8080


//Ejecutar rutas
app.get('/', () => {
    console.log('Entraste a la ruta: /')
})
app.get ('/jessica', () => {
    console.log('Mi nombre es Jessica')
})
app.post('/nombre', (req, res)=>{
    var name = req.body.name

    res.send('Hola ' + name + ' un gusto conocerte')
})
app.get ('/backend', (req, res) => {
    res.send('Entraste a /')
})
app.listen(port, () =>{
    console.log (colors.blue ('Felicidades tu API esta corriendo en: http://localhost:8080'))
})