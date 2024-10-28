import { Meta, StoryObj } from '@storybook/react';
import SingleDonutChart from '.';
import './style.css';
declare const meta: Meta<typeof SingleDonutChart>;
export default meta;
type Story = StoryObj<typeof SingleDonutChart>;
export declare const Default: Story;
export declare const LoadingChart: Story;
