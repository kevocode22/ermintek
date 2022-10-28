const mongoose = require('mongoose');

const laptopSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    image: {
        img1: { type: String },
        img2: { type: String }
    },
    features: {type: String},
    price: {type:Number},
    review: { type: String },
    tags: { type: String }
})

const laptop = mongoose.model('laptopsASUS', laptopSchema)
module.exports = laptop