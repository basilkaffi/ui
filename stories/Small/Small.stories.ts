import type { Meta, StoryObj } from '@storybook/react-vite';
import { Small } from '../../src';

const meta = {
  title: 'Typography/Small',
  component: Small,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Small>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'This is a sample small text.',
    variant: 'primary',
  },
};
