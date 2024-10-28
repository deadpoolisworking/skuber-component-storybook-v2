import { Meta, StoryObj } from '@storybook/react';
import Toast, { Props } from './index';

export default {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    type: 'default',
    label: 'Toast Sample Text',
  },
  render: (args) => {
    const handleChange = () => args.deleteTapped?.(true);
    return <Toast {...args} label={args.label} deleteTapped={handleChange} />;
  },
};
