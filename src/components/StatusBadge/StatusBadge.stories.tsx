import { Meta, StoryObj } from '@storybook/react';
import StatusBadge, { Props } from './index';

export default {
  title: 'Components/StatusBadge',
  component: StatusBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['good', 'neutral', 'bad', 'etc'],
    },
    children: {
      control: 'text',
    },
    isLoading: {
      control: 'boolean',
    },
  },
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Good: Story = {
  args: {
    status: 'good',
    children: 'Good Status',
    isLoading: false,
  },
};

export const NeutralStatus: Story = {
  args: {
    status: 'neutral',
    children: 'Neutral Status',
    isLoading: false,
  },
};

export const BadStatus: Story = {
  args: {
    status: 'bad',
    children: 'Bad Status',
    isLoading: false,
  },
};

export const Loading: Story = {
  args: {
    status: 'etc',
    children: 'Loading...',
    isLoading: true,
  },
};
