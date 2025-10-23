import { useContext, createContext } from 'react';
import type { ThemeContextType } from './types';

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme (): ThemeContextType {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};