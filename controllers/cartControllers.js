const Shopping = require('../models/shoppingCart')


const cartControllers = {

    addProduct: async (req, res) => {
        const { idProducto } = req.body
        const idUsuario = req.user._id
        let cantidad = 1
        try {
            let carritoExiste = await Shopping.findOne({ idProducto, idUsuario })

            if (carritoExiste !== null) {

                cantidad = carritoExiste.cantidad + 1
                const shopping = await Shopping.findOneAndUpdate({ idProducto, idUsuario }, {
                    $set: {
                        "cantidad": cantidad
                    }
                }, { new: true })
                res.json({
                    success: true,
                    response: { shopping },
                    message: "Tu compra ha sido actualizada"
                })
            }
            else {
                const shopping = await Shopping({ idProducto, idUsuario, cantidad }).save()
                res.json({
                    success: true,
                    response: { shopping },
                    message: "Producto añadido con éxito"
                })
            }
        }
        catch (error) {
            res.json({
                success: false,
                message: "Perdón, no pudimos añadir el producto, intenta de vuelta 😞"
            })
        }
    },

    getUserProducts: async (req, res) => {
        const idUsuario = req.user._id
        let cartShopping;
        const error = null;
        try {
            cartShopping = await Shopping.find({ idUsuario: idUsuario })
                .populate("idUsuario", { nombre: 1, email: 1 })
                .populate("idProducto", { name: 1, brand:1, cantidad: 1 })
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? "ERROR" : { cartShopping },
            success: error ? false : true,
            error: error
        })
    },

    getOneProduct: async (req, res) => {
        let product = req.params.id
        let idUser = req.user._id
        let shopping
        let error = null
        try {
            shopping = await Shopping.find({ idUser: idUser, _id: product })
                .populate("idPack", { nombre: 1, precio: 1, imagen: 1 })
                .populate("idUsuario", { email: 1, nombre: 1 })
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : { shopping },
            success: error ? false : true,
            error: error
        })
    },

    deleteProduct: async (req, res) => {
        const idProduct = req.params.id
        try {
            await Shopping.findOneAndDelete({ _id: idProduct })
            res.json({
                success: true,
                message: "Eliminamos el producto 👍"
            })
        }
        catch (error) {
            res.json({
                success: true,
                message: "Perdón, no se pudo eliminar el producto, intenta de vuelta 😞"
            })
        }
    },

    modifyProduct: async (req, res) => {

        const { productId, cantidad } = req.body
        try {
            const modifyCarrito = await Shopping
                .findOneAndUpdate({ "_id": productId }, {
                    $set: {
                        "cantidad": cantidad
                    }
                }, { new: true })
            res.json({
                success: true,
                response: { modifyCarrito },
                message: "Tu compra se ha modificado"
            })
        }
        catch (error) {
            res.json({
                success: true,
                message: "Perdón, no pudimos hacer la modificación"
            })
        }
    },



}
module.exports = cartControllers