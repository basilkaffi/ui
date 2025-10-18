import type { ThemeConfig } from '../theme/types';

export const darkTheme: ThemeConfig = {
  background: 'gray-90',
  surface: 'gray-80',
  muted: 'gray-40',
  link: 'blue-40',
  text: {
    primary: 'gray-10',
    secondary: 'gray-30',
    success: 'green-30',
    warning: 'yellow-30',
    info: 'cyan-30',
    error: 'red-30',
  },
  button: {
    primary: {
      default: 'purple-60',
      hover: 'purple-70',
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
      hover: 'green-70',
      focus: 'green-40',
      contrast: 'green-10',
    },
    warning: {
      default: 'yellow-60',
      hover: 'yellow-70',
      focus: 'yellow-40',
      contrast: 'yellow-10',
    },
    info: {
      default: 'cyan-60',
      hover: 'cyan-70',
      focus: 'cyan-40',
      contrast: 'cyan-10',
    },
    error: {
      default: 'red-60',
      hover: 'red-70',
      focus: 'red-40',
      contrast: 'red-10',
    },
  }
};

export default darkTheme;
