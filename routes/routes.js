const Router = require('express').Router();
const passport = require('../config/passport');
const validator = require('../config/validator');

const cellControllers = require('../controllers/cellControllers')
const { getCellPhones, addCellPhone, getOneCellPhone, modifyCellPhone, removeCellPhone } = cellControllers

const userControllers = require('../controllers/userControllers')
const { getUsers, signIn, signUp, verifyToken } = userControllers

const cartControllers = require('../controllers/cartControllers');
const { addProduct, modifyProduct, deleteProduct, getCartProducts } = cartControllers

Router.route('/cellphones')
    .get(getCellPhones)
    .post(addCellPhone)

Router.route('/cellphones/:id')
    .get(getOneCellPhone)
    .delete(removeCellPhone)
    .put(modifyCellPhone)

Router.route('/cart')
.get(passport.authenticate('jwt', {session: false}),getCartProducts)    
.post(addProduct)

Router.route('/cart/:id')
    .put(modifyProduct)
    .delete(deleteProduct)

    Router.route('/registrarse')
    .post(validator, signUp)
    
    Router.route('/iniciarsesion')
    .post(signIn)




module.exports = Router
