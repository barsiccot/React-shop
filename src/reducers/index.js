import { combineReducers } from 'redux';
import movies from './movies';
import cart from './cart';
import filter from './filter';


export default combineReducers({
  movies,
  cart,
  filter,

});