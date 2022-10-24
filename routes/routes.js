const Router = require('express').Router();

const cellControllers = require('../controllers/cellControllers')
const { getCellPhones, addCellPhone, getOneCellPhone, modifyCellPhone, removeCellPhone } = cellControllers

const userControllers = require('../controllers/userControllers')
const { getUsers, signIn, signUp, verifyToken } = userControllers

const cartControllers = require('../controllers/cartControllers');
const { deleteProduct } = require('../controllers/cartControllers');
const { addProduct, modifyProduct, removeProduct, getCartProducts } = cartControllers

Router.route('/cellphones')
    .get(getCellPhones)
    .post(addCellPhone)

Router.route('/cellphones/:id')
    .get(getOneCellPhone)
    .delete(removeCellPhone)
    .put(modifyCellPhone)

Router.route('/cart')
    .get(getCartProducts)
    .post(addProduct)

Router.route('/cart/:id')
    .put(modifyProduct)
    .delete(deleteProduct)

module.exports = Router
