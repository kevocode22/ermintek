const mongoose = require('mongoose');

const celularSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    image: {
        img1: { type: String },
        img2: { type: String }
    },
    features: {type: String},
    price: {
        "4/64": { type: Number },
        "4/128": { type: Number },
        "6/128": { type: Number },
        "8/128": { type: Number },
        "8/256": { type: Number },
        "12/256": { type: Number },
    },
    review: { type: String },
    tags: { type: String }
})

const Celular = mongoose.model('xiaomi', celularSchema)
module.exports = Celular