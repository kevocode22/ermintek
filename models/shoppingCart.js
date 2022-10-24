const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema ({
    idProducto: {type:mongoose.Types.ObjectId, ref:'xiaomi'},
    idUsuario: {type:mongoose.Types.ObjectId, ref:'usuarios'},
    cantidad: {type:Number},
    fecha: {
        reservado: {type:Date},
        vendido: {type:Date},
        enviado: {type:Date}
    },
    estadoDeCompra: {type:String}
})

const Shopping = mongoose.model('carritos',cartSchema)
module.exports = Shopping