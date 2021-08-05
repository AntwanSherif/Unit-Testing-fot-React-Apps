import { useTheme } from './theme';

export function ThemeToggler() {
  const [theme, setTheme] = useTheme();
  return <button onClick={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}>Toggle theme: {theme}</button>;
}
