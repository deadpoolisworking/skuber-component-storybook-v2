import { windowsIconSvg } from 'assets';
import Button from './index';
import './style.css';
const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
export const Contained = {
    args: {
        variant: 'contained',
        children: 'button',
    },
};
export const Outlined = {
    args: {
        variant: 'outlined',
        children: 'button',
    },
};
export const Text = {
    args: {
        variant: 'text',
        children: 'button',
    },
};
export const Large = {
    args: {
        variant: 'contained',
        size: 'large',
        children: 'button',
    },
};
export const Medium = {
    args: {
        variant: 'contained',
        size: 'medium',
        children: 'button',
    },
};
export const Small = {
    args: {
        variant: 'contained',
        size: 'small',
        children: 'button',
    },
};
export const StartIcon = {
    args: {
        variant: 'contained',
        size: 'medium',
        children: 'button',
        startIcon: windowsIconSvg,
    },
};
export const EndIcon = {
    args: {
        variant: 'contained',
        size: 'medium',
        children: 'button',
        endIcon: windowsIconSvg,
    },
};
