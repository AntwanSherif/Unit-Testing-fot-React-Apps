import { render, fireEvent } from '@testing-library/react';
import { Counter } from '../Counter';

it('Counter increments and decrements when the buttons are clicked', () => {
  const { container } = render(<Counter />);

  const message = container.firstChild.querySelector('div');
  const [decrement, increment] = container.querySelectorAll('button');

  expect(message.textContent).toBe('Current count: 0');
  fireEvent.click(increment);
  expect(message.textContent).toBe('Current count: 1');
  fireEvent.click(decrement);
  expect(message.textContent).toBe('Current count: 0');
});
