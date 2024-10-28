import { Meta, StoryObj } from '@storybook/react';
import SingleDonutChart from '.';
import './style.css';

const meta: Meta<typeof SingleDonutChart> = {
  title: 'Components/Charts/SingleDonutChart',
  component: SingleDonutChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SingleDonutChart>;

export const Default: Story = {
  args: {
    percentage: '23',
    capacity: '192',
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
    loading: true,
  },
  parameters: {
    docs: {
      storyDescription: '-',
    },
  },
};
