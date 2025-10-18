import { createContext, useContext } from 'react';
import type { ThemeConfig } from './types';

type ThemeContextType = {
  applyTheme: (customTheme: ThemeConfig) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function themeToCSSVars(theme: Record<string, any>, prefix = ''): string {
  let cssVars = '';
  const colorPattern = /^.+-(?:[0-9]|10)0$/;

  for (const key in theme) {
    if (key === 'source') continue;
    const value = theme[key];
    const newPrefix = prefix ? `${prefix}-${key}` : key;

    if (typeof value === 'string') {
      if (colorPattern.test(value)) {
        cssVars += `--${newPrefix}: var(--${value});\n`;
      } else {
        cssVars += `--${newPrefix}: ${value};\n`;
      }
    } else {
      cssVars += themeToCSSVars(value, newPrefix);
    }
  }

  return cssVars;
}

export function applyTokens(tokenConfig: ThemeConfig) {
  const styleId = 'theme-provider-styles';
  const linkId = 'font-family';
  let styleEl = document.getElementById(styleId) as HTMLStyleElement | null;
  let linkEl = document.getElementById(linkId) as HTMLLinkElement | null;

  const cssVars = themeToCSSVars(tokenConfig);

  const themeProviderClass = `.theme-provider {\n  ${cssVars}\n}`;

  const css = `\n${themeProviderClass}`;

  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = styleId;
    document.head.appendChild(styleEl);
  }

  if (!linkEl) {
    linkEl = document.createElement('link');
    linkEl.id = linkId;
    linkEl.rel = 'stylesheet';
    document.head.appendChild(linkEl);
  }

  styleEl.textContent = css;
  linkEl.href = (tokenConfig.font as { source: string }).source;

  document.body.classList.add('theme-provider');
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};
