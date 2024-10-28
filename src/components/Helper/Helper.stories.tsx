import { Meta, StoryObj } from '@storybook/react';
import Helper, { Props } from './index';

export default {
  title: 'Components/Helper',
  component: Helper,
  parameters: {
    layout: 'centered',
    controls: { exclude: ['children'] },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: false,
      options: ['left', 'center'],
    },
    content: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    style: {
      control: 'object',
    },
    titleStyle: {
      control: 'object',
    },
    parentPosition: {
      control: 'object',
    },
    children: {
      control: false,
    },
  },
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    type: 'center',
    content: 'Butto2211n name',
  },
  render: (args: any) => (
    <Helper {...args}>
      <button>Helper</button>
    </Helper>
  ),
};

export const helpPopover: Story = {
  args: {
    type: 'left',
    title: 'Title',
    content:
      'This is a message inside a HelpPopover. This is a message inside a HelpPopover. This is a message inside a HelpPopover.',
  },
  render: (args: any) => (
    <Helper {...args}>
      <button>?</button>
    </Helper>
  ),
};

export const helpPopoverNoTitle: Story = {
  args: {
    type: 'left',
    content:
      'This is a message inside a HelpPopover. This is a message inside a HelpPopover. This is a message inside a HelpPopover.',
  },
  render: (args: any) => (
    <Helper {...args}>
      <button>?</button>
    </Helper>
  ),
};
