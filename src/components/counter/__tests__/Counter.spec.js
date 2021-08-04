import { render } from '@testing-library/react';
import { Counter } from '../Counter';

const clickEvent = new MouseEvent('click', {
  bubbles: true,
  cancelable: true,
  button: 0
});

it('Counter increments and decrements when the buttons are clicked', () => {
  const { container } = render(<Counter />);

  const message = container.firstChild.querySelector('div');
  const [decrement, increment] = container.querySelectorAll('button');

  expect(message.textContent).toBe('Current count: 0');
  increment.dispatchEvent(clickEvent);
  expect(message.textContent).toBe('Current count: 1');
  decrement.dispatchEvent(clickEvent);
  expect(message.textContent).toBe('Current count: 0');
});
