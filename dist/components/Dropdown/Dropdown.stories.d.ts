import { Meta, StoryObj } from '@storybook/react';
import Dropdown from '.';
import './style.css';
declare const meta: Meta<typeof Dropdown>;
export default meta;
type Story = StoryObj<typeof Dropdown>;
export declare const Small: Story;
export declare const Medium: Story;
export declare const Disabled: Story;
export declare const Error: Story;
export declare const ContextMenu: Story;
export declare const ContextMenuSearch: Story;
