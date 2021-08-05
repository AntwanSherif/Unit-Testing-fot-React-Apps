import { Button, ThemeToggler, ThemeProvider } from './components';
import './App.css';

function App() {
  return (
    <div className='app'>
      <ThemeProvider>
        <h1>Hit the button!</h1>
        <hr className='line' />
        <Button onClick={() => alert('that was easy')}>Easy!</Button>
        <hr className='line' />
        <ThemeToggler />
      </ThemeProvider>
    </div>
  );
}

export default App;
