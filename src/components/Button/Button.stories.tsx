import { Meta, StoryObj } from '@storybook/react';
import { windowsIconSvg } from 'assets';
import Button, { Props } from './index';
import './style.css';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<Props>;

export const Contained: Story = {
  args: {
    variant: 'contained',
    children: 'button',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'button-outlined',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'button',
  },
};

export const Large: Story = {
  args: {
    variant: 'contained',
    size: 'large',
    children: 'button',
  },
};

export const Medium: Story = {
  args: {
    variant: 'contained',
    size: 'medium',
    children: 'button',
  },
};

export const Small: Story = {
  args: {
    variant: 'contained',
    size: 'small',
    children: 'button',
  },
};

export const StartIcon: Story = {
  args: {
    variant: 'contained',
    size: 'medium',
    children: 'button',
    startIcon: windowsIconSvg,
  },
};

export const EndIcon: Story = {
  args: {
    variant: 'contained',
    size: 'medium',
    children: 'button',
    endIcon: windowsIconSvg,
  },
};
