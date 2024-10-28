import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import RadioButton, { Props } from './index';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
    isSelected: {
      control: 'boolean',
    },
    onChange: {
      action: 'clicked',
    },
    style: {
      control: 'object',
    },
  },
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    title: 'Radio Button',
    isSelected: false,
  },
  render: (args) => {
    const [{ isSelected }, updateArgs] = useArgs();

    const handleChange = () => {
      updateArgs({ isSelected: !isSelected });
      args.onChange?.();
    };

    return (
      <RadioButton {...args} isSelected={isSelected} onChange={handleChange} />
    );
  },
};
