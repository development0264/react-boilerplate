/**
 *
 * The Redux Store configuration.
 *
 */

import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './Redux/Reducers';
import rootSagas from './Redux/Sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware(); // creates redux saga middleware
const browserWindow: any = window;

const store = configureStore({
  reducer: {
    rootReducer: rootReducers, // all reducers are defined in root reducer
  },
  middleware: [sagaMiddleware], // will add our saga middle ware
  devTools:
    browserWindow.__REDUX_DEVTOOLS_EXTENSION__ &&
    browserWindow.__REDUX_DEVTOOLS_EXTENSION__(), // this is allow chorme devtools to get access of our redux. app
});

sagaMiddleware.run(rootSagas); // will run all sagas here

export default store;
