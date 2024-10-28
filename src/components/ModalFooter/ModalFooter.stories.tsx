import { Meta, StoryObj } from '@storybook/react';
import ModalFooter from '.';
import './style.css';

const meta: Meta<typeof ModalFooter> = {
  title: 'Components/ModalFooter',
  component: ModalFooter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ModalFooter>;

export const Default: Story = {
  args: {
    leftButtonTitle: '이전',
    cancelButtonTitle: '취소',
    confirmButtonTitle: '완료',
    isConfirmButtonDisabled: false,
    hideOption: false,
    style: { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
  },
  parameters: {
    docs: {
      storyDescription: '기본 Modal Footer 입니다.',
    },
  },
};

export const Disabled: Story = {
  args: {
    leftButtonTitle: '이전',
    cancelButtonTitle: '취소',
    confirmButtonTitle: '완료',
    isConfirmButtonDisabled: true,
    style: { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
  },
  parameters: {
    docs: {
      storyDescription: '완료 버튼이 대기중인 Modal Footer 입니다.',
    },
  },
};

export const Loading: Story = {
  args: {
    leftButtonTitle: '이전',
    cancelButtonTitle: '취소',
    confirmButtonTitle: '완료',
    loading: true,
    style: { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
  },
  parameters: {
    docs: {
      storyDescription: '완료 버튼이 대기중인 Modal Footer 입니다.',
    },
  },
};

export const CheckOption: Story = {
  args: {
    hideOption: true,
    hideOptionText: 'Do not show again',
    cancelButtonTitle: '취소',
    confirmButtonTitle: '완료',
    style: { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
  },
  parameters: {
    docs: {
      storyDescription: 'Check Option이 활성화된 Modal Footer 입니다.',
    },
  },
};
