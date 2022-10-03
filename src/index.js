import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const AppRoot = createRoot(container);

AppRoot.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);