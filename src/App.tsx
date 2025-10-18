import { ThemeProvider } from './theme/ThemeProvider';
import { useTheme } from './theme/context';
import lightTheme from './config/lightTheme';
import darkTheme from './config/darkTheme';
import Switch from './components/Switch/Switch';
import { useState } from 'react';

function InnerApp() {
  const { applyTheme } = useTheme();

  const [isLight, setIsLight] = useState(false);

  function toggleTheme(next: boolean) {
    setIsLight(next);
    applyTheme(next ? lightTheme : darkTheme);
  }

  return (
    <div>
      <Switch checked={isLight} onChange={toggleTheme} />
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
