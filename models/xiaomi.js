const mongoose = require('mongoose');

const celularSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    image: {
        img1: { type: String },
        img2: { type: String }
    },
    features: { type: String },
    price: {
        "4_64": { type: Number },
        "4_128": { type: Number },
        "6_128": { type: Number },
        "8_128": { type: Number },
        "8_256": { type: Number },
        "12_256": { type: Number },
    },
    review: { type: String },
    tags: { type: String }
})

const xiaomi = mongoose.model('xiaomi', celularSchema)
module.exports = xiaomi
