import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import RangeCalendar, { Props } from './index';

export default {
  title: 'Components/RangeCalendar',
  component: RangeCalendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    from: {
      control: 'date',
    },
    to: {
      control: 'date',
    },
    onFromChange: {
      action: 'from date changed',
    },
    onToChange: {
      action: 'to date changed',
    },
  },
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    from: new Date(2023, 0, 1),
    to: new Date(2023, 11, 31),
  },
  render: (args) => {
    const [{ from, to }, updateArgs] = useArgs();

    const handleFromChange = (newFromDate: Date | null) => {
      updateArgs({ from: newFromDate });
      args.onFromChange?.(newFromDate);
    };

    const handleToChange = (newToDate: Date | null) => {
      updateArgs({ to: newToDate });
      args.onToChange?.(newToDate);
    };

    return (
      <RangeCalendar
        {...args}
        from={from}
        to={to}
        onFromChange={handleFromChange}
        onToChange={handleToChange}
      />
    );
  },
};
