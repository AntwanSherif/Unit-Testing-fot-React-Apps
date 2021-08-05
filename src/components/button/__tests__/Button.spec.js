import { render, screen } from '@testing-library/react';
import { Button } from '../Button';
import { ThemeProvider } from '../theme';

function renderWithTheme({ theme = 'light' } = {}) {
  const Wrapper = ({ children }) => <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>;
  render(<Button>Click me</Button>, { wrapper: Wrapper });
}
it('render with the light theme when the light theme is set', () => {
  renderWithTheme();
  const button = screen.getByRole('button', { name: /click me/i });

  expect(button).toHaveStyle(`
      background-color: white;
      color: black;
    `);
});

it('render with the dark theme when the dark theme is set', () => {
  renderWithTheme({ theme: 'dark' });
  const button = screen.getByRole('button', { name: /click me/i });

  expect(button).toHaveStyle(`
        color: white;
        background-color: black;
      `);
});
