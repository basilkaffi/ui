import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from './Typography';

const meta = {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'This is a sample text paragraph.',
    variant: 'primary',
  },
};
