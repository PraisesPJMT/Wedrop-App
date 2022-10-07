import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Header from '../components/Header';

describe('Header component tests', () => {
  test('Renders Header component correctly', () => {
    const header = render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>,
    );
    expect(header).toMatchSnapshot();
  });

  test('Check for heading in the header \'Wedrop\' is in the document', () => {
    render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>,
    );
    expect(
      screen.getByText(/Wedrop/i),
    ).toBeInTheDocument();
  });

  test('Check for City search placeholder is in the document', () => {
    render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>,
    );
    expect(
      screen.getByPlaceholderText('Search City...'),
    ).toBeInTheDocument();
  });

  test('Check for link in the Header \'Home\' is in the document', () => {
    render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>,
    );
    expect(
      screen.getByRole('link', { name: /Home/i }),
    ).toBeInTheDocument();
  });

  test('Check for link in the Header \'Contact\' is in the document', () => {
    render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>,
    );
    expect(
      screen.getByRole('link', { name: /Contact/i }),
    ).toBeInTheDocument();
  });
});
