import { jsx as _jsx } from "react/jsx-runtime";
import { useArgs } from '@storybook/preview-api';
import RadioButton from './index';
export default {
    title: 'Components/RadioButton',
    component: RadioButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
        },
        isSelected: {
            control: 'boolean',
        },
        onChange: {
            action: 'clicked',
        },
        style: {
            control: 'object',
        },
    },
};
export const Default = {
    args: {
        title: 'Radio Button',
        isSelected: false,
    },
    render: (args) => {
        const [{ isSelected }, updateArgs] = useArgs();
        const handleChange = () => {
            updateArgs({ isSelected: !isSelected });
            args.onChange?.();
        };
        return (_jsx(RadioButton, { ...args, isSelected: isSelected, onChange: handleChange }));
    },
};
