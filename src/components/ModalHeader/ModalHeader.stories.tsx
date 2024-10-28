import { Meta, StoryObj } from '@storybook/react';
import ModalHeader from '.';
import './style.css';
import { infoBlue, infoWhite } from 'assets';

const meta: Meta<typeof ModalHeader> = {
  title: 'Components/ModalHeader',
  component: ModalHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ModalHeader>;

export const Default: Story = {
  args: {
    title: 'Modal Sample Header',
    style: { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
  },
  parameters: {
    docs: {
      storyDescription: '기본 Modal Header 입니다.',
    },
  },
};

export const IconHeader: Story = {
  args: {
    title: 'Modal Sample Header',
    leftDecoration: infoWhite,
    style: { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
  },
  parameters: {
    docs: {
      storyDescription: 'Icon이 들어간 Modal Header 입니다.',
    },
  },
};
