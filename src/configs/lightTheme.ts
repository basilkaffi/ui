import type { ThemeConfig } from '../theme/types';

const lightTheme: ThemeConfig = {
  background: 'slate-00',
  surface: 'slate-10',
  muted: 'slate-30',
  border: 'slate-30',
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
    primary: 'slate-70',
    secondary: 'slate-50',
    success: 'emerald-80',
    warning: 'orange-60',
    info: 'sky-40',
    danger: 'red-70',
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
      default: 'orange-70',
      hover: 'orange-80',
      focus: 'orange-50',
      contrast: 'white-00',
    },
    info: {
      default: 'sky-70',
      hover: 'sky-80',
      focus: 'sky-50',
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
