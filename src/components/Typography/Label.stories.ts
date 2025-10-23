import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from './Typography';

const meta = {
  title: 'Typography/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'Form label',
    htmlFor: 'input-id',
  },
};
