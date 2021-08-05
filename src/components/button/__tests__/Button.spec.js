import { render, screen } from 'test/test-utils';
import { Button } from '../Button';

it('render with the light theme when the light theme is set', () => {
  render(<Button>Click me</Button>);
  const button = screen.getByRole('button', { name: /click me/i });

  expect(button).toHaveStyle(`
      background-color: white;
      color: black;
    `);
});

it('render with the dark theme when the dark theme is set', () => {
  render(<Button>Click me</Button>, { theme: 'dark' });
  const button = screen.getByRole('button', { name: /click me/i });

  expect(button).toHaveStyle(`
        color: white;
        background-color: black;
      `);
});
