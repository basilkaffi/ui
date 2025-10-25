import type { ThemeConfig } from '../theme/types';

const darkTheme: ThemeConfig = {
  background: 'slate-90',
  surface: 'slate-80',
  muted: 'slate-40',
  border: 'slate-70',
  font: {
    primary: '"Geist", sans-serif',
    secondary: '"Sora", sans-serif',
    source: 'https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Sora:wght@100..800&display=swap',
  },
  link: {
    default: 'purple-40',
    hover: 'purple-20',
  },
  text: {
    primary: 'slate-10',
    secondary: 'gray-40',
    success: 'emerald-50',
    warning: 'orange-40',
    info: 'sky-30',
    danger: 'rose-50',
  },
  button: {
    primary: {
      default: 'purple-70',
      hover: 'purple-60',
      focus: 'purple-50',
      contrast: 'purple-10',
    },
    secondary: {
      default: 'slate-80',
      hover: 'slate-70',
      focus: 'slate-60',
      contrast: 'slate-20',
    },
    success: {
      default: 'emerald-60',
      hover: 'emerald-50',
      focus: 'emerald-40',
      contrast: 'emerald-10',
    },
    warning: {
      default: 'orange-60',
      hover: 'orange-50',
      focus: 'orange-40',
      contrast: 'orange-10',
    },
    info: {
      default: 'sky-60',
      hover: 'sky-50',
      focus: 'sky-40',
      contrast: 'sky-10',
    },
    danger: {
      default: 'rose-60',
      hover: 'rose-50',
      focus: 'rose-40',
      contrast: 'rose-10',
    },
  },
  switch: {
    track: {
      on: 'slate-70',
      off: 'slate-50',
    },
    thumb: {
      on: 'slate-90',
      off: 'slate-70',
    },
  },
};

export default darkTheme;
