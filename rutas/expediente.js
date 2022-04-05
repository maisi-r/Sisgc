const express = require('express')
const router = express.Router()

const mongoose = require ('mongoose')
const eschema = mongoose.Schema

const eschemaexpediente = new eschema ({
    codorganismo: String,
    nrocorrelativo: String,
    anio: String,
    cuerpo: String,
    fecha: String,
    iniciador: String,
    asunto: String,
    idexpediente: String,
})


const ModeloExpediente = mongoose.model ('expedientes', eschemaexpediente)
module.exports = router

/*Ruta de prueba

router.get('/ejemplo',(req,res) =>{
    res.end('Saludo carga desde ruta ejemplo')
})

*/

router.post ('/agregarexpediente', (req,res) => {
    const nuevoexpediente = new ModeloExpediente({
            codorganismo: req.body.codorganismo,
            nrocorrelativo: req.body.nrocorrelativo,
            anio: req.body.anio,
            cuerpo : req.body.cuerpo,
            fecha : req.body.fecha,
            iniciador: req.body.iniciador,
            asunto : req.body.asunto,
            idexpediente : req.body.idexpediente
    })
    nuevoexpediente.save(function(err){
        if(!err){
            res.send('Expediente agregado correctamente')
        }else{
            res.send(err)
        }
    })
})