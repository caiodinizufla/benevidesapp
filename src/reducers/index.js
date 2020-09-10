import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr'

import { home } from '../views/home/homeReducers';
import { router } from './router';

export default combineReducers({
  toastr: toastrReducer,
  home,
  router
});