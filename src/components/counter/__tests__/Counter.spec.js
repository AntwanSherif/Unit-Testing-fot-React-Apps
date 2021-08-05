import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from '../Counter';

it('Counter increments and decrements when the buttons are clicked', () => {
  render(<Counter />);

  const message = screen.getByText(/current count/i);
  const decrement = screen.getByRole('button', { name: /decrement/i });
  const increment = screen.getByRole('button', { name: /increment/i });

  expect(message).toHaveTextContent('Current count: 0');
  userEvent.click(increment);
  expect(message.textContent).toBe('Current count: 1');
  userEvent.click(decrement);
  expect(message.textContent).toBe('Current count: 0');
});
