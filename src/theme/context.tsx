import { createContext, useContext } from 'react';
import type { ThemeConfig } from './types';

type ThemeContextType = {
  applyTheme: (customTheme: ThemeConfig) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function applyTokens(tokenConfig: ThemeConfig) {
  const styleId = 'theme-provider-styles';
  let styleEl = document.getElementById(styleId) as HTMLStyleElement | null;

  const cssVars = Object.entries(tokenConfig)
    .map(([k, v]) => {
      const key = k.replace(/([A-Z])/g, '-$1').toLowerCase();
      return `--${key}: var(--${v});`
    })
    .join('\n  ');

  const themeProviderClass = `.theme-provider {\n  ${cssVars}\n}`;

  const baseStyles = `body {
    background: var(--background);
    color: var(--text-primary);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    font-size: 16px;
    transition: background 300ms ease, color 300ms ease;
    margin: 0;
    box-sizing: border-box;
  }`;

  const disabledRule = `.theme-provider .disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }`;

  const css = `\n${themeProviderClass} \n${baseStyles} \n${disabledRule}`;

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
