import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import InputField, { Props } from './index';
import { superAdmin, searchSvg } from 'assets';

export default {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    inputText: '',
    placeholder: 'Enter text',
    inputType: 'text',
    maxLength: 50,
    disabled: false,
    error: false,
  },
  render: (args) => {
    const [{ inputText }, updateArgs] = useArgs();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newText = e.target.value;
      updateArgs({ inputText: newText });
      args.onChange?.(e);
    };

    return (
      <InputField {...args} inputText={inputText} onChange={handleChange} />
    );
  },
};

export const hasLeftIcon: Story = {
  args: {
    inputText: '',
    placeholder: 'hasLeftIcon',
    inputType: 'text',
    leftDecoration: superAdmin,
  },
  render: (args) => {
    const [{ inputText }, updateArgs] = useArgs();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newText = e.target.value;
      updateArgs({ inputText: newText });
      args.onChange?.(e);
    };

    return (
      <InputField {...args} inputText={inputText} onChange={handleChange} />
    );
  },
};

export const hasRightIcon: Story = {
  args: {
    inputText: '',
    placeholder: 'hasRightIcon',
    inputType: 'text',
    rightDecoration: searchSvg,
  },
  render: (args) => {
    const [{ inputText }, updateArgs] = useArgs();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newText = e.target.value;
      updateArgs({ inputText: newText });
      args.onChange?.(e);
    };

    return (
      <InputField {...args} inputText={inputText} onChange={handleChange} />
    );
  },
};

export const hasBothIcons: Story = {
  args: {
    inputText: '',
    placeholder: 'hasBothIcons',
    inputType: 'text',
    leftDecoration: superAdmin,
    rightDecoration: searchSvg,
  },
  render: (args) => {
    const [{ inputText }, updateArgs] = useArgs();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newText = e.target.value;
      updateArgs({ inputText: newText });
      args.onChange?.(e);
    };

    return (
      <InputField {...args} inputText={inputText} onChange={handleChange} />
    );
  },
};

export const Error: Story = {
  args: {
    inputText: 'Invalid input',
    placeholder: 'Enter text',
    inputType: 'text',
    error: true,
    errorText: 'This is an error',
  },
  render: (args) => {
    const [{ inputText }, updateArgs] = useArgs();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newText = e.target.value;
      updateArgs({ inputText: newText });
      args.onChange?.(e);
    };

    return (
      <InputField {...args} inputText={inputText} onChange={handleChange} />
    );
  },
};

export const InputNumber: Story = {
  args: {
    inputText: '5',
    placeholder: 'Enter number',
    inputType: 'number',
  },
  render: (args) => {
    const [{ inputText }, updateArgs] = useArgs();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newText = e.target.value;
      updateArgs({ inputText: newText });
      args.onChange?.(e);
    };

    return (
      <InputField {...args} inputText={inputText} onChange={handleChange} />
    );
  },
};

export const Disabled: Story = {
  args: {
    inputText: 'No Data',
    placeholder: 'Disabled InputField',
    inputType: 'text',
    maxLength: 50,
    disabled: true,
    error: false,
  },
  render: (args) => {
    const [{ inputText }, updateArgs] = useArgs();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newText = e.target.value;
      updateArgs({ inputText: newText });
      args.onChange?.(e);
    };

    return (
      <InputField {...args} inputText={inputText} onChange={handleChange} />
    );
  },
};

export const SearchFilter: Story = {
  args: {
    type: 'searchFilter',
    inputType: 'text',
    category: ['Category0', 'Category1', 'Category2'],
  },
  render: (args) => {
    const [{ inputText }, updateArgs] = useArgs();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newText = e.target.value;
      updateArgs({ inputText: newText });
      args.onChange?.(e);
    };

    return (
      <InputField {...args} inputText={inputText} onChange={handleChange} />
    );
  },
};
