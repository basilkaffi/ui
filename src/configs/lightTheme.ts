import type { ThemeConfig } from '../theme/types';

const lightTheme: ThemeConfig = {
  background: 'slate-00',
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
    primary: 'gray-70',
    secondary: 'gray-50',
    success: 'emerald-60',
    warning: 'orange-60',
    info: 'sky-40',
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
      default: 'slate-10',
      hover: 'slate-20',
      focus: 'slate-30',
      contrast: 'slate-70',
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
      default: 'sky-40',
      hover: 'sky-50',
      focus: 'sky-20',
      contrast: 'sky-00',
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
      on: 'purple-30',
      off: 'slate-10',
    },
    thumb: {
      on: 'slate-00',
      off: 'slate-00',
    },
  },
};

export default lightTheme;
