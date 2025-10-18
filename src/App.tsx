import { ThemeProvider } from './theme/ThemeProvider';
import { useTheme } from './theme/context';
import lightTheme from './config/lightTheme';
import darkTheme from './config/darkTheme';

function InnerApp() {
  const { applyTheme } = useTheme();

  return (
    <div style={{ padding: 24 }}>
      <h1>Portfolio (themed)</h1>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => applyTheme(lightTheme)}>Light</button>
        <button onClick={() => applyTheme(darkTheme)}>Dark</button>
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
