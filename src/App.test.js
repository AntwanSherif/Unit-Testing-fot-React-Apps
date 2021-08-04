import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn unit-testing in react', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn unit testing in react/i);
  expect(linkElement).toBeInTheDocument();
});
