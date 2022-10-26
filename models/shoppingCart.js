const mongoose = require('mongoose')
const { Schema } = mongoose;


const cartSchema = new mongoose.Schema ({
    idProducto: {type: Schema.Types.ObjectId, ref:'xiaomi'},
    idUsuario: {type: Schema.Types.ObjectId, ref:'usuarios'},
    cantidad: {type:Number},
    fecha: {
        reservado: {type:Date},
        vendido: {type:Date},
        enviado: {type:Date}
    },
    estadoDeCompra: {type:String}
})

const shoppingCart = mongoose.model('carritos',cartSchema)
module.exports = shoppingCart