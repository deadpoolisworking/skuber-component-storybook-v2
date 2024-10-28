import { Meta, StoryObj } from '@storybook/react';
import CustomAreaChart from '.';
import './style.css';
declare const meta: Meta<typeof CustomAreaChart>;
export default meta;
type Story = StoryObj<typeof CustomAreaChart>;
export declare const Default: Story;
export declare const LoadingChart: Story;
