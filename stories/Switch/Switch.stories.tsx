import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from '../../src';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: { layout: 'centered' },
  argTypes: {
    checked: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    defaultChecked: false,
    disabled: false,
    label: 'Enable feature',
  },
};
