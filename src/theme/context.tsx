import { createContext, useContext } from 'react';
import type { ThemeConfig } from './types';

type ThemeContextType = {
  applyTheme: (customTheme: ThemeConfig) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function themeToCSSVars(theme: Record<string, any>, prefix = ''): string {
  let cssVars = '';

  for (const key in theme) {
    const value = theme[key];
    const newPrefix = prefix ? `${prefix}-${key}` : key;

    if (typeof value === 'string') {
      cssVars += `--${newPrefix}: var(--${value});\n`;
    } else {
      cssVars += themeToCSSVars(value, newPrefix);
    }
  }

  return cssVars;
}

export function applyTokens(tokenConfig: ThemeConfig) {
  const styleId = 'theme-provider-styles';
  let styleEl = document.getElementById(styleId) as HTMLStyleElement | null;

  const cssVars = themeToCSSVars(tokenConfig);

  const themeProviderClass = `.theme-provider {\n  ${cssVars}\n}`;

  const css = `\n${themeProviderClass}`;

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
