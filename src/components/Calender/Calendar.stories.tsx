import { Meta, StoryObj } from '@storybook/react';
import Calendar, { Props } from '.';
import './style.css';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    selectedDate: new Date(),
  },
  parameters: {
    docs: {
      storyDescription: '-',
    },
  },
};
