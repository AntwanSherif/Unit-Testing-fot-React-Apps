import ReactDOM from 'react-dom';
import { Counter } from '../Counter';

beforeEach(() => {
  document.body.innerHTML = '';
});

const clickEvent = new MouseEvent('click', {
  bubbles: true,
  cancelable: true,
  button: 0
});

// rendering
// behavior
it('Counter increments and decrements when the buttons are clicked', () => {
  // setup
  const container = document.createElement('div');
  document.body.append(container);

  ReactDOM.render(<Counter />, container);

  //   console.log(document.body.innerHTML);

  const message = container.firstChild.querySelector('div');
  const [decrement, increment] = container.querySelectorAll('button');

  // act & expect

  expect(message.textContent).toBe('Current count: 0');
  //   increment.click();
  increment.dispatchEvent(clickEvent);
  expect(message.textContent).toBe('Current count: 1');

  //   decrement.click();
  decrement.dispatchEvent(clickEvent);

  expect(message.textContent).toBe('Current count: 0');

  // clean up
  container.remove();
});
