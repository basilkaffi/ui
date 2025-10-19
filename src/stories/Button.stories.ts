import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../components';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
};
