import type { Preview } from '@storybook/react-vite';
import { applyTokens } from '../src/theme/utils';
import { darkTheme, lightTheme } from '../src/config';
import './storybook.scss';

applyTokens(lightTheme);

const preview: Preview = {
  parameters: {
    a11y: {
      test: 'todo'
    },
    backgrounds: { disable: true },
  },
  beforeEach: (context) => {
    const theme = context.globals.theme === 'dark' ? darkTheme : lightTheme;
    applyTokens(theme);
  },
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
};

export default preview;