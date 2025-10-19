import type { ThemeConfig } from '../theme/types';

const darkTheme: ThemeConfig = {
  background: 'gray-90',
  surface: 'gray-80',
  muted: 'gray-40',
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
    primary: 'gray-10',
    secondary: 'gray-40',
    success: 'green-50',
    warning: 'yellow-40',
    info: 'cyan-30',
    error: 'red-50',
  },
  button: {
    primary: {
      default: 'purple-60',
      hover: 'purple-50',
      focus: 'purple-40',
      contrast: 'purple-10',
    },
    secondary: {
      default: 'gray-80',
      hover: 'gray-70',
      focus: 'gray-60',
      contrast: 'gray-20',
    },
    success: {
      default: 'green-60',
      hover: 'green-50',
      focus: 'green-40',
      contrast: 'green-10',
    },
    warning: {
      default: 'yellow-60',
      hover: 'yellow-50',
      focus: 'yellow-40',
      contrast: 'yellow-10',
    },
    info: {
      default: 'cyan-60',
      hover: 'cyan-50',
      focus: 'cyan-40',
      contrast: 'cyan-10',
    },
    error: {
      default: 'red-60',
      hover: 'red-50',
      focus: 'red-40',
      contrast: 'red-10',
    },
  }
};

export default darkTheme;
