import { useArgs } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react';
import Chip from './index';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    selected: false,
    label: 'Default Chip',
  },
  parameters: {
    docs: {
      storyDescription: '기본 칩 컴포넌트',
    },
  },
};

export const DeleteChip: Story = {
  args: {
    selected: false,
    hasDelete: true,
    label: 'Has Delete Chip',
  },
  parameters: {
    docs: {
      storyDescription: '삭제 가능 칩 컴포넌트',
    },
  },
  render: (args) => {
    const [{ value }, updateArgs] = useArgs();

    const handleChange = () => {
      updateArgs({ value: !value });
      args.onChange?.(true);
    };

    return <Chip {...args} selected={value} onChange={handleChange} />;
  },
};

export const IconChip: Story = {
  args: {
    selected: false,
    hasIcon: true,
    label: 'Has Icon Chip',
  },
  parameters: {
    docs: {
      storyDescription: '아이콘 칩 컴포넌트',
    },
  },
};
