import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import Checkbox, { Props } from './index';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: { type: 'boolean' },
    },
    onChange: { action: 'checked state changed' },
  },
};

export default meta;

type Story = StoryObj<Props>;

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Checked Checkbox',
  },
  render: (args) => {
    const [{ checked }, updateArgs] = useArgs();

    const handleChange = (newChecked: boolean) => {
      updateArgs({ checked: newChecked });
      args.onChange?.(newChecked);
    };

    return <Checkbox {...args} checked={checked} onChange={handleChange} />;
  },
};

export const Unchecked: Story = {
  args: {
    checked: false,
    label: 'Unchecked Checkbox',
  },
  render: (args) => {
    const [{ checked }, updateArgs] = useArgs();

    const handleChange = (newChecked: boolean) => {
      updateArgs({ checked: newChecked });
      args.onChange?.(newChecked);
    };

    return <Checkbox {...args} checked={checked} onChange={handleChange} />;
  },
};

export const WithoutLabel: Story = {
  args: {
    checked: false,
  },
  render: (args) => {
    const [{ checked }, updateArgs] = useArgs();

    const handleChange = (newChecked: boolean) => {
      updateArgs({ checked: newChecked });
      args.onChange?.(newChecked);
    };

    return <Checkbox {...args} checked={checked} onChange={handleChange} />;
  },
};
