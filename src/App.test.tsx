import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Employee from './components/Employee'
import Department from './components/Department'
import Home from './components/Home'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
