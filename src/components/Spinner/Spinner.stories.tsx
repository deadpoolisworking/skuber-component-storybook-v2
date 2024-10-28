import { Meta, StoryObj } from '@storybook/react';
import Spinner from './index';
import './style.css';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    wrapperStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
};
