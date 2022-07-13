import { put } from 'redux-saga/effects';
import { IToastProps } from '../../utils/types';
import { TOAST_HIDE, TOAST_SHOW } from '../Actions/ToastAction';

interface IToast {
  payload: IToastProps;
}

export function* ToastSaga(action: IToast): unknown {
  try {
    if (action.payload.hide) {
      yield put({ type: TOAST_HIDE });
    } else {
      yield put({ type: TOAST_SHOW, payload: action.payload });
    }
  } catch (e) {
    return yield put({ type: TOAST_HIDE });
  }
}
