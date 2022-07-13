/**
 *
 * All The Types will define here.
 *
 */

import { AlertColor } from '@mui/material';

export interface IReduxState {
  rootReducer: IRootReducer;
}

/*------------Reducer Types Start---------------*/
export interface IRootReducer {
  AuthReducer: IAuthReducer;
  ToastReducer: IToastReducer;
}

export interface IToastReducer {
  open: boolean;
  severity: AlertColor;
  message: string;
  hide?: boolean;
}
export interface IAuthReducer {
  user: string;
  status: boolean;
  loading: boolean;
}

/*------------Reducer Types End---------------*/

/*------------Common Types Start---------------*/

export interface IToastProps {
  open?: boolean;
  severity?: AlertColor;
  message?: string;
  hide?: boolean;
}

/*------------Common Types End---------------*/
