import { jsx as _jsx } from "react/jsx-runtime";
import { useArgs } from '@storybook/preview-api';
import InputField from './index';
import { superAdmin, searchSvg } from 'assets';
export default {
    title: 'Components/InputField',
    component: InputField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export const Default = {
    args: {
        inputText: '',
        placeholder: 'Enter text',
        inputType: 'text',
        maxLength: 50,
        disabled: false,
        error: false,
    },
    render: (args) => {
        const [{ inputText }, updateArgs] = useArgs();
        const handleChange = (e) => {
            const newText = e.target.value;
            updateArgs({ inputText: newText });
            args.onChange?.(e);
        };
        return (_jsx(InputField, { ...args, inputText: inputText, onChange: handleChange }));
    },
};
export const hasLeftIcon = {
    args: {
        inputText: '',
        placeholder: 'hasLeftIcon',
        inputType: 'text',
        leftDecoration: superAdmin,
    },
    render: (args) => {
        const [{ inputText }, updateArgs] = useArgs();
        const handleChange = (e) => {
            const newText = e.target.value;
            updateArgs({ inputText: newText });
            args.onChange?.(e);
        };
        return (_jsx(InputField, { ...args, inputText: inputText, onChange: handleChange }));
    },
};
export const hasRightIcon = {
    args: {
        inputText: '',
        placeholder: 'hasRightIcon',
        inputType: 'text',
        rightDecoration: searchSvg,
    },
    render: (args) => {
        const [{ inputText }, updateArgs] = useArgs();
        const handleChange = (e) => {
            const newText = e.target.value;
            updateArgs({ inputText: newText });
            args.onChange?.(e);
        };
        return (_jsx(InputField, { ...args, inputText: inputText, onChange: handleChange }));
    },
};
export const hasBothIcons = {
    args: {
        inputText: '',
        placeholder: 'hasBothIcons',
        inputType: 'text',
        leftDecoration: superAdmin,
        rightDecoration: searchSvg,
    },
    render: (args) => {
        const [{ inputText }, updateArgs] = useArgs();
        const handleChange = (e) => {
            const newText = e.target.value;
            updateArgs({ inputText: newText });
            args.onChange?.(e);
        };
        return (_jsx(InputField, { ...args, inputText: inputText, onChange: handleChange }));
    },
};
export const Error = {
    args: {
        inputText: 'Invalid input',
        placeholder: 'Enter text',
        inputType: 'text',
        error: true,
        errorText: 'This is an error',
    },
    render: (args) => {
        const [{ inputText }, updateArgs] = useArgs();
        const handleChange = (e) => {
            const newText = e.target.value;
            updateArgs({ inputText: newText });
            args.onChange?.(e);
        };
        return (_jsx(InputField, { ...args, inputText: inputText, onChange: handleChange }));
    },
};
export const InputNumber = {
    args: {
        inputText: '5',
        placeholder: 'Enter number',
        inputType: 'number',
    },
    render: (args) => {
        const [{ inputText }, updateArgs] = useArgs();
        const handleChange = (e) => {
            const newText = e.target.value;
            updateArgs({ inputText: newText });
            args.onChange?.(e);
        };
        return (_jsx(InputField, { ...args, inputText: inputText, onChange: handleChange }));
    },
};
export const Disabled = {
    args: {
        inputText: 'No Data',
        placeholder: 'Disabled InputField',
        inputType: 'text',
        maxLength: 50,
        disabled: true,
        error: false,
    },
    render: (args) => {
        const [{ inputText }, updateArgs] = useArgs();
        const handleChange = (e) => {
            const newText = e.target.value;
            updateArgs({ inputText: newText });
            args.onChange?.(e);
        };
        return (_jsx(InputField, { ...args, inputText: inputText, onChange: handleChange }));
    },
};
export const SearchFilter = {
    args: {
        type: 'searchFilter',
        inputType: 'text',
        category: ['Category0', 'Category1', 'Category2'],
    },
    render: (args) => {
        const [{ inputText }, updateArgs] = useArgs();
        const handleChange = (e) => {
            const newText = e.target.value;
            updateArgs({ inputText: newText });
            args.onChange?.(e);
        };
        return (_jsx(InputField, { ...args, inputText: inputText, onChange: handleChange }));
    },
};
