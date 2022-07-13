/**
 *
 * All the reducer will exports from here,
 *
 */

import { combineReducers } from 'redux';
import { AuthReducer } from './AuthReducer';
import { ToastReducer } from './ToastReducer';

export default combineReducers({
  AuthReducer,
  ToastReducer,
});
