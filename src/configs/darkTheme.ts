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
    secondary: 'slate-40',
    success: 'emerald-40',
    warning: 'orange-60',
    info: 'sky-30',
    danger: 'rose-70',
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
      default: 'emerald-70',
      hover: 'emerald-60',
      focus: 'emerald-50',
      contrast: 'emerald-00',
    },
    warning: {
      default: 'orange-80',
      hover: 'orange-70',
      focus: 'orange-60',
      contrast: 'orange-00',
    },
    info: {
      default: 'sky-70',
      hover: 'sky-60',
      focus: 'sky-50',
      contrast: 'sky-00',
    },
    danger: {
      default: 'rose-70',
      hover: 'rose-60',
      focus: 'rose-50',
      contrast: 'rose-00',
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
