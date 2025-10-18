import { ThemeProvider } from './theme/ThemeProvider';
import { useTheme } from './theme/context';
import lightTheme from './config/lightTheme';
import darkTheme from './config/darkTheme';
import Switch from './components/Switch/Switch';
import { useState } from 'react';
import Button from './components/Button/Button';

function InnerApp() {
  const { applyTheme } = useTheme();

  const [isLight, setIsLight] = useState(false);

  function toggleTheme(next: boolean) {
    setIsLight(next);
    applyTheme(next ? lightTheme : darkTheme);
  }

  return (
    <div style={{ padding: '20px' }}>
        <Switch checked={isLight} onChange={toggleTheme} label={`${isLight ? 'Light' : 'Dark'} Theme`} />
      <hr />
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <Switch />
        <Button variant='primary'>Primary</Button>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='success'>Success</Button>
        <Button variant='warning'>Warning</Button>
        <Button variant='info'>Info</Button>
        <Button variant='error'>Error</Button>
        <a href="#">Link</a>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <InnerApp />
    </ThemeProvider>
  );
}

export default App;
