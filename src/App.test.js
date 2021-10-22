import { render, screen } from '@testing-library/react';
import react from 'react';
import App from './App';

test('renders learn react link', () => {
  const div = react.createElement("div");
  render(<App/> , div)
});
