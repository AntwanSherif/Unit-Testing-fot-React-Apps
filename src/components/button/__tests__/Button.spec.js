import { render, screen } from '@testing-library/react';
import { Button } from '../Button';
import { ThemeProvider } from '../theme';

it('render with the light theme when the light theme is set', () => {
  const Wrapper = ({ children }) => <ThemeProvider initialTheme='light'>{children}</ThemeProvider>;
  render(<Button>Click me</Button>, { wrapper: Wrapper });
  const button = screen.getByRole('button', { name: /click me/i });

  expect(button).toHaveStyle(`
      background-color: white;
      color: black;
    `);
});
