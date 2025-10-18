import type { ThemeConfig } from '../theme/types';

const lightTheme: ThemeConfig = {
  background: 'gray-10',
  surface: 'blue-10',
  muted: 'blue-40',
  link: 'blue-60',
  text: {
    primary: 'gray-90',
    secondary: 'gray-70',
    success: 'green-70',
    warning: 'yellow-70',
    info: 'cyan-70',
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
      default: 'blue-70',
      hover: 'blue-80',
      focus: 'blue-50',
      contrast: 'blue-10',
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
