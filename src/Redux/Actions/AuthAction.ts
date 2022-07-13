export const GET_USER_REQUEST: any = 'GET_USER_REQUEST';
export const GET_USER_FOUND = 'GET_USER_FOUND';
export const GET_USER_NOT_FOUND = 'GET_USER_NOT_FOUND';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

interface ILogin {
  email: string;
  password: string;
}

export const LoginAction = (data: ILogin) => {
  return { type: GET_USER_REQUEST, payload: data };
};

export const LogoutAction = () => {
  return { type: LOGOUT };
};
