import { createContext, useContext } from 'react';
import type { ThemeTokens } from './types';

type ThemeContextType = {
  applyTheme: (customTheme: ThemeTokens) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function applyTokens(tokens: ThemeTokens) {
  const styleId = 'theme-provider-styles';
  let styleEl = document.getElementById(styleId) as HTMLStyleElement | null;

  const cssVars = Object.entries(tokens)
    .map(([k, v]) => `${k}: ${v};`)
    .join('\n  ');

  const css = `.theme-provider {\n  ${cssVars}\n}`;

  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = styleId;
    document.head.appendChild(styleEl);
  }

  styleEl.textContent = css;

  document.body.classList.add('theme-provider');
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};
