import {combineReducers} from 'redux';
import celularesReducer  from './celularesReducer';
import usuariosReducer from './usuariosReducer'

const mainReducer = combineReducers({
celularesReducer, usuariosReducer
})

export default mainReducer

