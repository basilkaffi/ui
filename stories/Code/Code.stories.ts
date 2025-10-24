import type { Meta, StoryObj } from '@storybook/react-vite';
import { Code } from '../../src';

const meta = {
  title: 'Typography/Code',
  component: Code,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: `const add = (a, b) => a + b;`,
  },
};
