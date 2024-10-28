import { jsx as _jsx } from "react/jsx-runtime";
import { useArgs } from '@storybook/preview-api';
import Checkbox from './index';
const meta = {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        checked: {
            control: { type: 'boolean' },
        },
        onChange: { action: 'checked state changed' },
    },
};
export default meta;
export const Checked = {
    args: {
        checked: true,
        label: 'Checked Checkbox',
    },
    render: (args) => {
        const [{ checked }, updateArgs] = useArgs();
        const handleChange = (newChecked) => {
            updateArgs({ checked: newChecked });
            args.onChange?.(newChecked);
        };
        return _jsx(Checkbox, { ...args, checked: checked, onChange: handleChange });
    },
};
export const Unchecked = {
    args: {
        checked: false,
        label: 'Unchecked Checkbox',
    },
    render: (args) => {
        const [{ checked }, updateArgs] = useArgs();
        const handleChange = (newChecked) => {
            updateArgs({ checked: newChecked });
            args.onChange?.(newChecked);
        };
        return _jsx(Checkbox, { ...args, checked: checked, onChange: handleChange });
    },
};
export const WithoutLabel = {
    args: {
        checked: false,
    },
    render: (args) => {
        const [{ checked }, updateArgs] = useArgs();
        const handleChange = (newChecked) => {
            updateArgs({ checked: newChecked });
            args.onChange?.(newChecked);
        };
        return _jsx(Checkbox, { ...args, checked: checked, onChange: handleChange });
    },
};
