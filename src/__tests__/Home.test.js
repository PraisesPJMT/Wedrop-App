import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Home from '../components/Home';

describe('Home page component tests', () => {
  test('Renders home page component correctly', () => {
    const home = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Home />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(home).toMatchSnapshot();
  });

  test('Check for heading \'Wedrop\' to be in the Home page', () => {
    render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Home />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(
      document.querySelector('h1').textContent,
    ).toBe('Wadrop');
  });
});
