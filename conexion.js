const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/gestiondearchivos')

const objetodb = mongoose.connection

objetodb.on('connected', ()=>{console.log('Conexión correcta a MongoDB')})
objetodb.on('error', ()=>{console.log('Error en la conexión a MongoDB')})

module.exports = mongoose