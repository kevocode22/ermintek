const mongoose = require('mongoose');

const celularSchema = new mongoose.Schema({
    name: {type:String, required: true },
    brand:{type:String, required: true},
    description:{type:String, required: true},
    image:{type:String, required: true},
    price:{type:String},
    tags:{type:String}
})

const Celular = mongoose.model('celulares', celularSchema)
module.exports = Celular