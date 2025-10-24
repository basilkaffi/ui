import type { ThemeConfig } from '../theme/types';

const lightTheme: ThemeConfig = {
  background: 'slate-10',
  surface: 'purple-10',
  muted: 'purple-40',
  font: {
    primary: '"Geist", sans-serif',
    secondary: '"Sora", sans-serif',
    source: 'https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Sora:wght@100..800&display=swap',
  },
  link: {
    default: 'purple-70',
    hover: 'purple-90',
  },
  text: {
    primary: 'slate-80',
    secondary: 'slate-50',
    success: 'emerald-60',
    warning: 'orange-60',
    info: 'cyan-40',
    danger: 'rose-70',
  },
  button: {
    primary: {
      default: 'purple-70',
      hover: 'purple-80',
      focus: 'purple-50',
      contrast: 'purple-00',
    },
    secondary: {
      default: 'slate-20',
      hover: 'slate-30',
      focus: 'slate-40',
      contrast: 'slate-80',
    },
    success: {
      default: 'emerald-70',
      hover: 'emerald-80',
      focus: 'emerald-50',
      contrast: 'emerald-00',
    },
    warning: {
      default: 'orange-60',
      hover: 'orange-70',
      focus: 'orange-40',
      contrast: 'orange-00',
    },
    info: {
      default: 'cyan-40',
      hover: 'cyan-50',
      focus: 'cyan-20',
      contrast: 'cyan-00',
    },
    danger: {
      default: 'rose-70',
      hover: 'rose-80',
      focus: 'rose-50',
      contrast: 'rose-00',
    },
  },
  switch: {
    track: {
      on: 'purple-40',
      off: 'purple-20',
    },
    thumb: {
      on: 'slate-10',
      off: 'purple-10',
    },
  },
};

export default lightTheme;
