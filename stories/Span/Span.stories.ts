import type { Meta, StoryObj } from '@storybook/react-vite';
import { Span } from '../../src';

const meta = {
  title: 'Typography/Span',
  component: Span,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Span>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'Inline span text',
    variant: 'primary',
  },
};
