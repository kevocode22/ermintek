import {combineReducers} from 'redux';
import celularesReducer  from './celularesReducer';
import usuariosReducer from './usuariosReducer'
import cartReducers from './cartReducers'
import laptopsReducer from './laptopsReducer';
import macBooksReducer from './macBooksReducer';

const mainReducer = combineReducers({
celularesReducer, usuariosReducer,cartReducers, laptopsReducer, macBooksReducer
})

export default mainReducer

