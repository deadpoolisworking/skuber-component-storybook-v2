import { Meta, StoryObj } from '@storybook/react';
import Dropdown from '.';
import './style.css';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

// Default 스토리
export const Small: Story = {
  args: {
    size: 'small',
    helperText: 'Helper Text',
    options: ['Object1', 'Object2', 'Object3'],
  },
  parameters: {
    docs: {
      storyDescription: '작은 사이즈 드롭다운입니다.',
    },
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    helperText: 'Helper Text',
    options: ['Object1', 'Object2', 'Object3'],
  },
  parameters: {
    docs: {
      storyDescription: '중간 사이즈 드롭다운입니다.',
    },
  },
};

export const Disabled: Story = {
  args: {
    size: 'small',
    helperText: 'Option is empty',
    options: ['Object1', 'Object2', 'Object3'],
    disabled: true,
    disabledText: 'None',
  },
  parameters: {
    docs: {
      storyDescription: '비활성화된 드롭다운입니다.',
    },
  },
};

export const Error: Story = {
  args: {
    size: 'small',
    helperText: 'Something goes wrong.',
    options: ['Object1', 'Object2', 'Object3'],
    isError: true,
  },
  parameters: {
    docs: {
      storyDescription: '에러상태 드롭다운입니다.',
    },
  },
};

export const ContextMenu: Story = {
  args: {
    type: 'context',
    options: ['Option1', 'Option2', 'Option3'],
  },
  parameters: {
    docs: {
      storyDescription: '컨텍스트메뉴 전용 드롭다운입니다.',
    },
  },
};

export const ContextMenuSearch: Story = {
  args: {
    type: 'default',
    options: ['Option1', 'Option2', 'Option3'],
    search: true,
    searchPlaceHolder: 'Choose the option you want.',
  },
  parameters: {
    docs: {
      storyDescription: '컨텍스트메뉴 검색 전용 드롭다운입니다.',
    },
  },
};
