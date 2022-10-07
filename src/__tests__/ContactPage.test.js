import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactPage from '../pages/ContactPage';

describe('Contact page component tests', () => {
  test('Renders contact page component correctly', () => {
    const contact = render(
      <ContactPage />,
    );
    expect(contact).toMatchSnapshot();
  });

  test('Check for link in the Header \'Contact\' is in the document', () => {
    render(
      <ContactPage />,
    );
    expect(
      screen.getByRole('heading', { name: /Contact Information/i }),
    ).toBeInTheDocument();
  });
});
