import { Meta, StoryObj } from '@storybook/react';
import HorizontalBar from '.';
import './style.css';

const meta: Meta<typeof HorizontalBar> = {
  title: 'Components/Charts/HorizontalBar',
  component: HorizontalBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof HorizontalBar>;

export const Default: Story = {
  args: {
    value: 30,
  },
  parameters: {
    docs: {
      storyDescription: '-',
    },
  },
};
