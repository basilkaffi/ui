import type { Meta, StoryObj } from '@storybook/react-vite';
import { ColorPaletteRow } from './ColorPalette';

const meta = {
  title: 'Design System/ColorPalette',
  component: ColorPaletteRow,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ColorPaletteRow>;

export default meta;
type Story = StoryObj<typeof meta>;

const colors = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
];

export const AllColors: Story = {
  args: {
    color: 'slate'
  },
  render: () => (
    <div style={{ padding: '20px' }}>
      {colors.map((color) => (
        <ColorPaletteRow key={color} color={color} />
      ))}
    </div>
  ),
};