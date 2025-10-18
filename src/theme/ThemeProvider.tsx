import { useEffect } from 'react';
import type { ThemeTokens } from './types';
import { ThemeContext, applyTokens } from './context';
import '../styles/index.scss';
import darkTheme from '../config/darkTheme';

export const ThemeProvider: React.FC<React.PropsWithChildren<{ themeConfig?: ThemeTokens }>> = ({ children, themeConfig = darkTheme }) => {

  useEffect(() => {
    applyTokens(themeConfig);
  }, [themeConfig]);

  const applyTheme = (customTheme: ThemeTokens) => {
    applyTokens(customTheme);
  };

  return (
    <ThemeContext.Provider value={{ applyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
