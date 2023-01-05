const mongoose = require('mongoose');

const macBookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
        image: {
            img1: { type: String },
            img2: { type: String },
            img3: { type: String }
        },
    features: [
        {
            "Pantalla": { type: String },
            "Procesador": { type: String },
            "RAM": { type: String },
            "Almacenamiento": { type: String },
            "Expansión": { type: String },
            "Cámara": { type: String },
            "Batería": { type: String },
            "OS": { type: String }
        }
    ],
    details: [

        {
            "Ram": { type: Number },
            "Storage": { type: Number },
            "Price": { type: Number }
        },
    ],
    review: { type: String },
    tags: { type: String }
})

const laptop = mongoose.model('macbook', macBookSchema)
module.exports = laptop