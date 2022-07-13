/**
 *
 * This is Main file of the app.
 * all the required components which will affecting the whole app should declare here.
 * Ex:- Toast Component
 *
 */

import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Toast from './Components/UI/Toast/Toast';
import AppRoutes from './Routes';
import { IReduxState } from './utils/types';

const App = () => {
  const ToastState = useSelector(
    (state: IReduxState) => state.rootReducer.ToastReducer
  );
  return (
    <>
      <Toast
        open={ToastState.open}
        message={ToastState.message}
        severity={ToastState.severity}
      />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
