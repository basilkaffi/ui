import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from './Typography';

const meta = {
  title: 'Typography/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'Visit example.com',
    href: 'https://example.com',
    target: '_blank',
  },
};
