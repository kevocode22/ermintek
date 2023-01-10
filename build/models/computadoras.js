const mongoose = require('mongoose');

const laptopSchema = new mongoose.Schema({
    name: { type: String, required: true },
    model: { type: String },
    brand: { type: String },
    description: {
        "p1": { type: String },
        "p2": { type: String },
        "p3": { type: String }
    },
    image: {
        img1: { type: String },
        img2: { type: String },
        img3: { type: String }
    },
    features: [
        {
            "Pantalla": { type: String },
            "Procesador": { type: String },
            "Graficos": { type: String },
            "RAM": { type: String },
            "Almacenamiento": { type: String },
            "Batería": { type: String },
            "OS": { type: String },
            "Código": { type: String }
        }
    ],
    price: { type: Number },
    review: { type: String },
    tags: { type: String },
    likes: { type: Array }
})

const laptop = mongoose.model('computadora', laptopSchema)
module.exports = laptop