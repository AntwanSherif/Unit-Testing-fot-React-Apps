import { render, screen } from '@testing-library/react';
import { Button } from '../Button';
import { ThemeProvider } from '../theme';

function renderWithTheme(ui, { theme = 'light' } = {}) {
  const Wrapper = ({ children }) => <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>;
  render(ui, { wrapper: Wrapper });
}
it('render with the light theme when the light theme is set', () => {
  renderWithTheme(<Button>Click me</Button>);
  const button = screen.getByRole('button', { name: /click me/i });

  expect(button).toHaveStyle(`
      background-color: white;
      color: black;
    `);
});

it('render with the dark theme when the dark theme is set', () => {
  renderWithTheme(<Button>Click me</Button>, { theme: 'dark' });
  const button = screen.getByRole('button', { name: /click me/i });

  expect(button).toHaveStyle(`
        color: white;
        background-color: black;
      `);
});
