'use strict'
// De la libreria node_modules requiero express


const colors = require('colors')

const keys = require('./config')

const app = require('./app')

const mongoose = require('mongoose')

var port = keys.PORT

mongoose.connect(keys.db, (err, res) => {
    if (err) {
        console.log(`Hubo un error conectandose a la base de datos: ${err}`)
    }
    app.listen(port, () => {
        console.log(colors.bgGreen("Tu API esta corriendo en: ") + colors.bgCyan(`http://localhost:${port}`))
    })
})

