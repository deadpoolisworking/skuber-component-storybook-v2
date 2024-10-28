import { Meta, StoryObj } from '@storybook/react';
import Tooltip, { Props } from './index';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    style: {
      control: 'object',
    },
    marginX: {
      control: 'number',
    },
    marginY: {
      control: 'number',
    },
    position: {
      control: 'object',
    },
    children: {
      control: 'text',
    },
  },
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    position: { x: 0, y: 0 },
    marginX: 0,
    marginY: 0,
    children: 'This is a tooltip',
    style: {
      backgroundColor: 'black',
      color: 'white',
      padding: '10px',
      borderRadius: '4px',
    },
  },
};
