import type { Preview } from '@storybook/react-vite';
import { ThemeProvider } from '../src/theme/context';
import { darkTheme, lightTheme } from '../src/config';

const preview: Preview = {
  parameters: {
    a11y: {
      test: 'todo'
    },
    backgrounds: { disable: true },
    docs: {
      canvas: {
        withToolbar: false,
      }
    }
  },
  tags: ['autodocs'],
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Select Theme",
      defaultValue: "light",
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        title: 'Theme'
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme === "dark" ? darkTheme : lightTheme;
      return (
        <ThemeProvider themeConfig={theme}>
          <Story />
        </ThemeProvider>
      )
    }
  ],
};

export default preview;