const Router = require('express').Router();
const passport = require('../config/passport');
const validator = require('../config/validator');

const cellControllers = require('../controllers/cellControllers')
const { getCellPhones, addCellPhone, getOneCellPhone, modifyCellPhone, removeCellPhone } = cellControllers

const userControllers = require('../controllers/userControllers')
const { signIn, signUp, verifyToken, verifyMail } = userControllers

const cartControllers = require('../controllers/cartControllers');
const { addProduct, modifyProduct, deleteProduct, getUserProducts } = cartControllers

Router.route('/cellphones')
    .get(getCellPhones)
    .post(addCellPhone)

Router.route('/cellphones/:id')
    .get(getOneCellPhone)
    .delete(removeCellPhone)
    .put(modifyCellPhone)

Router.route('/cart')
.get(passport.authenticate('jwt', {session: false}), getUserProducts)    
.post(passport.authenticate('jwt', {session:false}), addProduct)

Router.route('/cart/:id')
.get(passport.authenticate('jwt', {session: false}), modifyProduct)
    .delete(passport.authenticate('jwt', {session: false}), deleteProduct)

    Router.route('/registrarse')
    .post(validator, signUp)
    
    Router.route('/iniciarsesion')
    .post(signIn)

    Router.route('/verificartoken')
    .get(passport.authenticate('jwt', { session: false }), verifyToken)

    Router.route('/verificar/:string')
    .get(verifyMail)



module.exports = Router
