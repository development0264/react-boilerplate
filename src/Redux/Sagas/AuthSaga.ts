import { put } from 'redux-saga/effects';
import {
  GET_USER_FOUND,
  GET_USER_NOT_FOUND,
  LOGOUT_SUCCESS,
} from '../Actions/AuthAction';
import { TOAST_SHOW } from '../Actions/ToastAction';
interface ILogin {
  payload: {
    email: string;
    password: string;
  };
}

export function* LoginSaga(action: ILogin): unknown {
  try {
    // your api call here
    yield put({ type: GET_USER_FOUND, payload: 'Jhon' });
  } catch (e) {
    yield put({ type: GET_USER_NOT_FOUND });
    return yield put({
      type: TOAST_SHOW,
      payload: { message: 'Invalid Email Or Password!', severity: 'error' },
    });
  }
}

export function* LogoutSaga(): unknown {
  try {
    // your api call here
    yield put({ type: LOGOUT_SUCCESS });
  } catch (e) {
    return yield put({
      type: TOAST_SHOW,
      payload: {
        message: 'Something Went wrong please try again',
        severity: 'error',
      },
    });
  }
}
