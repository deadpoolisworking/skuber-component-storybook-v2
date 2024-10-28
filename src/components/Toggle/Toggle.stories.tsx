import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import Toggle, { Props } from './index';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // argTypes: {
  //   value: {
  //     control: 'boolean',
  //   },
  //   onChange: {
  //     action: 'clicked',
  //   },
  // },
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    value: false,
    type: 'switch',
  },
  render: (args) => {
    const [{ value }, updateArgs] = useArgs();

    const handleChange = () => {
      updateArgs({ value: !value });
      args.onChange?.();
    };

    return <Toggle {...args} value={value} onChange={handleChange} />;
  },
};

export const Favorite: Story = {
  args: {
    value: false,
    type: 'favorite',
  },
  render: (args) => {
    const [{ value }, updateArgs] = useArgs();

    const handleChange = () => {
      updateArgs({ value: !value });
      args.onChange?.();
    };

    return <Toggle {...args} value={value} onChange={handleChange} />;
  },
};
