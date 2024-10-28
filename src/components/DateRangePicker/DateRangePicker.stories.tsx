import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import DateRangePicker, { Props } from './index';

export default {
  title: 'Components/DateRangePicker',
  component: DateRangePicker,
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
    onResetClick: {
      action: 'Reset clicked',
    },
    onSubmitClick: {
      action: 'Submit clicked',
    },
    onCancelClick: {
      action: 'Cancel clicked',
    },
  },
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    from: null,
    to: null,
  },
  render: (args) => {
    const [{ from, to }, updateArgs] = useArgs();

    const handleFromChange = (date: Date | null) => {
      updateArgs({ from: date });
      args.onFromChange?.(date);
    };

    const handleToChange = (date: Date | null) => {
      updateArgs({ to: date });
      args.onToChange?.(date);
    };

    const handleSubmitClick = () => {
      if (args.onSubmitClick) {
        args.onSubmitClick({ start: from, end: to });
      }
    };

    const handleCancelClick = () => {
      updateArgs({ from: null, to: null });
      if (args.onCancelClick) {
        args.onCancelClick();
      }
    };

    const handleResetClick = () => {
      updateArgs({ from: null, to: null });
    };

    return (
      <DateRangePicker
        {...args}
        from={from}
        to={to}
        onFromChange={handleFromChange}
        onToChange={handleToChange}
        onSubmitClick={handleSubmitClick}
        onCancelClick={handleCancelClick}
        onResetClick={handleResetClick}
      />
    );
  },
};
