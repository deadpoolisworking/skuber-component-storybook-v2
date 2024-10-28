import { jsx as _jsx } from "react/jsx-runtime";
import { useArgs } from '@storybook/preview-api';
import TextArea from './index';
export default {
    title: 'Components/TextArea',
    component: TextArea,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        inputText: {
            control: 'text',
        },
        placeholder: {
            control: 'text',
        },
        maxLength: {
            control: 'number',
        },
        disabled: {
            control: 'boolean',
        },
        onChange: {
            action: 'changed',
        },
        onPressEnter: {
            action: 'pressed',
        },
        autoFocus: {
            control: 'boolean',
        },
    },
};
export const Default = {
    args: {
        placeholder: 'Enter your text...',
        maxLength: 200,
        inputText: '',
        autoFocus: false,
    },
    render: (args) => {
        const [{ inputText }, updateArgs] = useArgs();
        const handleChange = (e) => {
            updateArgs({ inputText: e.target.value });
            args.onChange?.(e);
        };
        return _jsx(TextArea, { ...args, inputText: inputText, onChange: handleChange });
    },
};
export const Disabled = {
    args: {
        placeholder: 'Disabled TextArea',
        disabled: true,
    },
    render: (args) => {
        const [{ inputText }, updateArgs] = useArgs();
        const handleChange = (e) => {
            updateArgs({ inputText: e.target.value });
            args.onChange?.(e);
        };
        return _jsx(TextArea, { ...args, inputText: inputText, onChange: handleChange });
    },
};
