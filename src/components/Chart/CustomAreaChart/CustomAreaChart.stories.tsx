import { Meta, StoryObj } from '@storybook/react';
import CustomAreaChart from '.';
import './style.css';

const meta: Meta<typeof CustomAreaChart> = {
  title: 'Components/Charts/CustomAreaChart',
  component: CustomAreaChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CustomAreaChart>;

export const Default: Story = {
  args: {
    mode: 'light',
    title: 'Sample Chart',
    data: [
      { timestamp: 0, v1: 6 },
      { timestamp: 10, v1: 6 },
      { timestamp: 20, v1: 6 },
      { timestamp: 30, v1: 7 },
      { timestamp: 40, v1: 7 },
      { timestamp: 50, v1: 7 },
      { timestamp: 60, v1: 8 },
      { timestamp: 70, v1: 8 },
      { timestamp: 80, v1: 8 },
      { timestamp: 90, v1: 8 },
      { timestamp: 100, v1: 7 },
      { timestamp: 110, v1: 7 },
      { timestamp: 120, v1: 7 },
      { timestamp: 130, v1: 7 },
      { timestamp: 140, v1: 6 },
    ],
    loading: false,
  },
  parameters: {
    docs: {
      storyDescription: '-',
    },
  },
};

export const LoadingChart: Story = {
  args: {
    mode: 'light',
    title: 'Loading Chart',
    data: [],
    loading: true,
  },
  parameters: {
    docs: {
      storyDescription: '-',
    },
  },
};
