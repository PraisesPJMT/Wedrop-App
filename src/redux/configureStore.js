import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import weather from './weather/weather';

// Redux store
const store = configureStore(
  {
    reducer: weather,
  },
  applyMiddleware(thunk),
);

export default store;
