import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import InputDate, { Props } from './index';

export default {
  title: 'Components/InputDate',
  component: InputDate,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    date: {
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
    date: new Date(),
    readOnly: false,
  },
  render: (args) => {
    const [{ date }, updateArgs] = useArgs();

    const handleChange = (newDate: Date | null) => {
      updateArgs({ date: newDate });
      args.onChange?.(newDate);
    };

    return <InputDate {...args} date={date} onChange={handleChange} />;
  },
};

export const ReadOnly: Story = {
  args: {
    date: new Date(),
    readOnly: true,
  },
  render: (args) => {
    const [{ date }, updateArgs] = useArgs();

    const handleChange = (newDate: Date | null) => {
      updateArgs({ date: newDate });
      args.onChange?.(newDate);
    };

    return <InputDate {...args} date={date} onChange={handleChange} />;
  },
};
