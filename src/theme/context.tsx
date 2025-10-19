import { useEffect, useContext, createContext } from 'react';
import type { ThemeConfig } from './types';
import { applyTokens } from './utils';
import { darkTheme } from '../config';
import '../styles/index.scss';

type ThemeContextType = {
  applyTheme: (customTheme: ThemeConfig) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};

export const ThemeProvider: React.FC<React.PropsWithChildren<{ themeConfig?: ThemeConfig }>> = ({ children, themeConfig = darkTheme }) => {
  useEffect(() => {
    applyTokens(themeConfig);
  }, [themeConfig]);

  const applyTheme = (customTheme: ThemeConfig) => {
    applyTokens(customTheme);
  };

  return (
    <ThemeContext.Provider value={{ applyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
