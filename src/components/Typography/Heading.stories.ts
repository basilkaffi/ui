import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading } from './Typography';

const meta = {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'Heading Text',
    variant: 'primary',
    type: 'h1',
  },
};
