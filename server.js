const express = require('express')
const app = express()

//Importar conexion mongoDB
const archivoBD = require ('./conexion')

//Importacion del archivo de rutas y modelo expediente
const rutaexpediente = require ('./rutas/expediente')

//Importar body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/expediente', rutaexpediente)

app.get('/', (req,res)=>{
    res.end('Bienvenidos al servidor de Gestion de Archivos.js Corriendo...')
})

//Configurar server básico

app.listen(5000, function () {
    console.log('El servidor de Gestión de Archivos está corriendo correctamente')
})