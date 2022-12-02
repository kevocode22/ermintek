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

    details: [
        {
            "Ram": Number,
            "Storage": Number,
            "Price": Number
        },

    ],
    review: { type: String },
    tags: { type: String }
})

const xiaomi = mongoose.model('xiaomi', celularSchema)
module.exports = xiaomi
