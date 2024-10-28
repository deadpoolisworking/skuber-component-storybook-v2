import { Meta, StoryObj } from '@storybook/react';
import AreaChart from '.';
import './style.css';

const meta: Meta<typeof AreaChart> = {
  title: 'Components/Charts/AreaChart',
  component: AreaChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AreaChart>;

export const Default: Story = {
  args: {
    dataPoints: [
      { x: 0, y: 4 },
      { x: 10, y: 4 },
      { x: 20, y: 5 },
      { x: 30, y: 6 },
      { x: 40, y: 6 },
      { x: 50, y: 7 },
      { x: 60, y: 8 },
      { x: 70, y: 8 },
      { x: 80, y: 8 },
      { x: 90, y: 7 },
      { x: 100, y: 7 },
      { x: 110, y: 6 },
      { x: 120, y: 6 },
      { x: 130, y: 5 },
      { x: 140, y: 4 },
    ],
    capacity: '200',
    unit: 'GB',
  },
  parameters: {
    docs: {
      storyDescription: '-',
    },
  },
};
