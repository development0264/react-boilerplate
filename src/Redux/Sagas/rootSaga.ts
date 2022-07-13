/**
 *
 * All the sagas will manage from here.
 *
 */

import { takeEvery } from 'redux-saga/effects';
import { GET_USER_REQUEST, LOGOUT } from '../Actions/AuthAction';
import { TOAST_INIT } from '../Actions/ToastAction';
import { LoginSaga, LogoutSaga } from './AuthSaga';
import { ToastSaga } from './ToastSaga';

function* rootSagas() {
  yield takeEvery(GET_USER_REQUEST, LoginSaga);
  yield takeEvery(LOGOUT, LogoutSaga);
  yield takeEvery(TOAST_INIT, ToastSaga);
  // Add more sagas here
}

export default rootSagas;
