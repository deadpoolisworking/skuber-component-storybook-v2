import { Meta, StoryObj } from '@storybook/react';
import Typography, { Props } from './index';

export default {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 's1', 'b1', 'b2', 'label', 'link', 'code'],
    },
    weight: {
      control: 'select',
      options: ['bold', 'semi-bold', 'medium', 'regular', 'thin'],
    },
    style: {
      control: 'object',
    },
    children: {
      control: 'text',
    },
    onClick: {
      action: 'clicked',
    },
  },
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    variant: 'b1',
    weight: 'bold',
    children: 'wondermove s-kuber design system0',
  },
};

export const h1: Story = {
  args: {
    variant: 'h1',
    children: 'wondermove s-kuber design system1',
  },
  parameters: {
    controls: { exclude: ['weight'] },
  },
};

export const h2: Story = {
  args: {
    variant: 'h2',
    children: 'wondermove s-kuber design system',
  },
  parameters: {
    controls: { exclude: ['weight'] },
  },
};

export const s1: Story = {
  args: {
    variant: 's1',
    children: 'wondermove s-kuber design system',
  },
  parameters: {
    controls: { exclude: ['weight'] },
  },
};

export const b1: Story = {
  args: {
    variant: 'b1',
    weight: 'bold',
    children: 'wondermove s-kuber design system',
  },
};

export const b2: Story = {
  args: {
    variant: 'b2',
    weight: 'bold',
    children: 'wondermove s-kuber design system',
  },
  argTypes: {
    weight: {
      control: 'select',
      options: ['bold', 'regular'],
    },
  },
};

export const label: Story = {
  args: {
    variant: 'label',
    weight: 'bold',
    children: 'wondermove s-kuber design system',
  },
  argTypes: {
    weight: {
      control: 'select',
      options: ['bold', 'medium', 'regular'],
    },
  },
};

export const link: Story = {
  args: {
    variant: 'link',
    children: 'wondermove s-kuber design system',
  },
  parameters: {
    controls: { exclude: ['weight'] },
  },
};

export const code: Story = {
  args: {
    variant: 'code',
    children: 'wondermove s-kuber design system',
  },
  parameters: {
    controls: { exclude: ['weight'] },
  },
};
