const Router = require('express').Router();
const passport = require('../config/passport');
const validator = require('../config/validator');

const { getCellPhones, addCellPhone, getOneCellPhone, modifyCellPhone, removeCellPhone } = require('../controllers/cellControllers')
const { signIn, signUp, verifyToken, verifyMail } = require('../controllers/userControllers')
const { addProduct, modifyProduct, deleteProduct, getUserProducts } = require('../controllers/cartControllers')
const { addMacBook, getMacBooks, getOneMacbook, modifyMacBook, removeMacBook } = require('../controllers/macBookControllers');
const { addLaptop, getLaptops, getOneLaptop, modifyLaptop, removeLaptop } = require('../controllers/laptopControllers');

//Rutas Celulares
Router.route('/cellphones')
    .get(getCellPhones)
    .post(addCellPhone)
Router.route('/cellphones/:id')
    .get(getOneCellPhone)
    .delete(removeCellPhone)
    .put(modifyCellPhone)

    //Rutas para el carrito
Router.route('/cart')
    .get(passport.authenticate('jwt', { session: false }), getUserProducts)
    .post(passport.authenticate('jwt', { session: false }), addProduct)
Router.route('/cart/:id')
    .get(passport.authenticate('jwt', { session: false }), modifyProduct)
    .delete(passport.authenticate('jwt', { session: false }), deleteProduct)

    //Rutas para iniciar sesion, registro y verificación de usuarios
Router.route('/registrarse')
    .post(validator, signUp)
Router.route('/iniciarsesion')
    .post(signIn)
Router.route('/verificartoken')
    .get(passport.authenticate('jwt', { session: false }), verifyToken)
Router.route('/verificar/:string')
    .get(verifyMail)

    //Rutas para controlar laptops
Router.route('/laptops')
    .get(getLaptops)
    .post(addLaptop)
Router.route('/laptops/:id')
    .get(getOneLaptop)
    .delete(removeLaptop)
    .put(modifyLaptop)

    //Rutas para controlar productos MacBook
Router.route('/macbooks')
    .get(getMacBooks)
    .post(addMacBook)
Router.route('/macbooks/:id')
    .get(getOneMacbook)
    .delete(removeMacBook)
    .put(modifyMacBook)

module.exports = Router
