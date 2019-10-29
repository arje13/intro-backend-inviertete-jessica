//Librerias
const express = require ('express')

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

//Metodos
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

//Exportar todo el archivo para que pueda ser empleado en cualquier archivo js
module.exports = app