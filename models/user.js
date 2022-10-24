
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, unique: true },
    contraseña: [{ type: String, required: true }],
    imagen: { type: String, required: true },
    from: [{ type: String, required: true }],
    uniqueString: { type: String, required: true },
    verification: { type: Boolean, required: true },
    rol: {
        type: String, enum: ['usuario', 'admin'], default: 'usuario'
    },
})

const Usuario = mongoose.model('usuarios', usuarioSchema)

module.exports = Usuario