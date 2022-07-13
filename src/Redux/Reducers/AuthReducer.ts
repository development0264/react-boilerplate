import {
  GET_USER_FOUND,
  GET_USER_NOT_FOUND,
  GET_USER_REQUEST,
  LOGOUT_SUCCESS,
} from '../Actions/AuthAction';

const LoginInitialState = {
  loading: false,
  user: '',
};

export const AuthReducer = (state = LoginInitialState, action: any) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_FOUND:
      localStorage.setItem('user', action.payload);
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case GET_USER_NOT_FOUND:
      return { ...LoginInitialState };
    case LOGOUT_SUCCESS:
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};
