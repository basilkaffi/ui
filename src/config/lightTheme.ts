import type { ThemeConfig } from '../theme/types';

const lightTheme: ThemeConfig = {
  background: 'gray-10',
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
    primary: 'gray-80',
    secondary: 'gray-50',
    success: 'green-60',
    warning: 'yellow-60',
    info: 'cyan-40',
    error: 'red-70',
  },
  button: {
    primary: {
      default: 'purple-70',
      hover: 'purple-80',
      focus: 'purple-50',
      contrast: 'purple-10',
    },
    secondary: {
      default: 'gray-20',
      hover: 'gray-30',
      focus: 'gray-50',
      contrast: 'gray-70',
    },
    success: {
      default: 'green-70',
      hover: 'green-80',
      focus: 'green-50',
      contrast: 'green-10',
    },
    warning: {
      default: 'yellow-70',
      hover: 'yellow-80',
      focus: 'yellow-50',
      contrast: 'yellow-10',
    },
    info: {
      default: 'cyan-40',
      hover: 'cyan-50',
      focus: 'cyan-20',
      contrast: 'cyan-10',
    },
    error: {
      default: 'red-70',
      hover: 'red-80',
      focus: 'red-50',
      contrast: 'red-10',
    },
  }
};

export default lightTheme;
