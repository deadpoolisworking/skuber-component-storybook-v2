import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import TextArea, { Props } from './index';

export default {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    inputText: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    maxLength: {
      control: 'number',
    },
    disabled: {
      control: 'boolean',
    },
    onChange: {
      action: 'changed',
    },
    onPressEnter: {
      action: 'pressed',
    },
    autoFocus: {
      control: 'boolean',
    },
  },
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your text...',
    maxLength: 200,
    inputText: '',
    autoFocus: false,
  },
  render: (args) => {
    const [{ inputText }, updateArgs] = useArgs();

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      updateArgs({ inputText: e.target.value });
      args.onChange?.(e);
    };

    return <TextArea {...args} inputText={inputText} onChange={handleChange} />;
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled TextArea',
    disabled: true,
  },
  render: (args) => {
    const [{ inputText }, updateArgs] = useArgs();

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      updateArgs({ inputText: e.target.value });
      args.onChange?.(e);
    };

    return <TextArea {...args} inputText={inputText} onChange={handleChange} />;
  },
};
