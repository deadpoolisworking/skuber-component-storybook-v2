import { Meta, StoryObj } from '@storybook/react';
import CustomLineChart from '.';
import './style.css';
declare const meta: Meta<typeof CustomLineChart>;
export default meta;
type Story = StoryObj<typeof CustomLineChart>;
export declare const Default: Story;
export declare const LoadingChart: Story;
