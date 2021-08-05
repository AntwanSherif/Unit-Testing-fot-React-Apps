import { render, screen } from '@testing-library/react';
import { Button } from '../Button';
import { ThemeProvider } from '../theme';

it('render with the light theme when the light theme is set', () => {
  render(
    <ThemeProvider>
      <Button>Click me</Button>
    </ThemeProvider>
  );
  const button = screen.getByRole('button', { name: /click me/i });

  expect(button).toHaveStyle(`
      background-color: white;
      color: black;
    `);
});
