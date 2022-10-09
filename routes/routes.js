const Router = require('express').Router();


const cellControllers = require('../controllers/cellControllers')
const {getCellPhones, addCellPhone, getOneCellPhone, modifyCellPhone, removeCellPhone} = cellControllers

Router.route('/cellphones')
    .get(getCellPhones)
    .post(addCellPhone)

Router.route('/cellphones/:id')
    .get(getOneCellPhone)
    .delete(removeCellPhone)
    .put(modifyCellPhone)


    module.exports = Router
