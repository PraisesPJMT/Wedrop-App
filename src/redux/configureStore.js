import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import weatherReducer from './weather/weather';

// Redux store
const store = configureStore(
  {
    reducer: weatherReducer,
  },
  applyMiddleware(thunk),
);

export default store;
