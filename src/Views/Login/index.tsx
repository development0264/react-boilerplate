/**
 *
 * This view contains login page design you can change it as you want from ./styled.tsx
 *
 */
import React, { useEffect } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { LoginWrapper } from './styled';
import TextBox from '../../Components/UI/TextBox';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction } from '../../Redux/Actions/AuthAction';
import { IAuthReducer, IReduxState } from '../../Utils/types';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Formik } from 'formik';
import { ToastAction } from '../../Redux/Actions/ToastAction';
import Loader from '../../Components/UI/Loader';

interface ILogin {
  email: string;
  password: string;
}

const Login = () => {
  /*-----------Initializations-------------*/

  let localUser;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reduxState: IAuthReducer = useSelector(
    (state: IReduxState) => state.rootReducer.AuthReducer
  );
  const initialValue = {
    email: '',
    password: '',
  };

  // Add Validation to login form

  const validationSchema = yup.object({
    email: yup
      .string()
      .required('Email is required!')
      .email('Please enter valid email!'),
    password: yup.string().required('Password is required!'),
  });

  /*-----------Initializations-------------*/

  /*--------------Handlers-------------*/

  // Will dispatch the data to login saga

  const handleLogin = (data: ILogin) => {
    dispatch(LoginAction(data));
  };

  /*--------------Handlers-------------*/

  /*--------------Effects-------------*/

  // This will loads the dashbaord if user is already logged in.

  useEffect(() => {
    localUser = localStorage.getItem('user');
    if (localUser) {
      navigate('/');
    }
  }, []);

  // This will redirects the dashbaord if user is logged in successfully.

  useEffect(() => {
    if (reduxState.user) {
      dispatch(
        ToastAction({ message: 'Login Successfully!', severity: 'success' })
      );
      navigate('/');
    }
  }, [reduxState]);

  /*--------------Effects-------------*/

  return (
    !localUser && (
      <LoginWrapper>
        <Paper
          variant="outlined"
          sx={{
            background: '#fff',
            width: {
              lg: '30vw',
              md: '40vw',
              sm: '50vw',
              xs: '80vw',
            },
            p: 3,
          }}
        >
          {reduxState.loading ? (
            <Loader />
          ) : (
            <>
              <Typography variant="h2">Login</Typography>
              <Box sx={{ my: 5 }}>
                <Formik
                  initialValues={initialValue}
                  validationSchema={validationSchema}
                  onSubmit={(values: ILogin) => {
                    handleLogin(values);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isValid,
                    /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <TextBox
                        label="Email"
                        name="email"
                        fullWidth
                        value={values.email}
                        error={!!errors.email && !!touched.email}
                        onChange={handleChange}
                        helperText={
                          errors.email && touched.email && errors.email
                        }
                        onBlur={handleBlur}
                        placeholder="Enter Email"
                      />
                      <TextBox
                        label="Password"
                        name="password"
                        fullWidth
                        type="password"
                        value={values.password}
                        error={!!errors.password && !!touched.password}
                        onChange={handleChange}
                        helperText={
                          errors.password && touched.password && errors.password
                        }
                        onBlur={handleBlur}
                        placeholder="Enter Password"
                      />
                      <Box sx={{ textAlign: 'right' }}>
                        <Button
                          sx={{ mt: 7, px: 4, py: 1.3, letterSpacing: '2px' }}
                          variant="contained"
                          color="secondary"
                          type="submit"
                          disabled={!isValid}
                        >
                          Login
                        </Button>
                      </Box>
                    </form>
                  )}
                </Formik>
              </Box>
            </>
          )}
        </Paper>
      </LoginWrapper>
    )
  );
};

export default Login;
