import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import InputTime, { Props } from './index';

export default {
  title: 'Components/InputTime',
  component: InputTime,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    time: {
      control: 'date',
    },
    readOnly: {
      control: 'boolean',
    },
    onChange: {
      action: 'changed',
    },
  },
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    time: new Date(),
    readOnly: false,
  },
  render: (args) => {
    const [{ time }, updateArgs] = useArgs();

    const handleChange = (newTime: Date | null) => {
      updateArgs({ time: newTime });
      args.onChange?.(newTime);
    };

    return <InputTime {...args} time={time} onChange={handleChange} />;
  },
};

export const ReadOnly: Story = {
  args: {
    time: new Date(),
    readOnly: true,
  },
  render: (args) => {
    const [{ time }, updateArgs] = useArgs();

    const handleChange = (newTime: Date | null) => {
      updateArgs({ time: newTime });
      args.onChange?.(newTime);
    };

    return <InputTime {...args} time={time} onChange={handleChange} />;
  },
};
