import { jsx as _jsx } from "react/jsx-runtime";
import { useArgs } from '@storybook/preview-api';
import InputDate from './index';
export default {
    title: 'Components/InputDate',
    component: InputDate,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        date: {
            control: 'date',
        },
        readOnly: {
            control: 'boolean',
        },
        onChange: {
            action: 'changed',
        },
    },
};
export const Default = {
    args: {
        date: new Date(),
        readOnly: false,
    },
    render: (args) => {
        const [{ date }, updateArgs] = useArgs();
        const handleChange = (newDate) => {
            updateArgs({ date: newDate });
            args.onChange?.(newDate);
        };
        return _jsx(InputDate, { ...args, date: date, onChange: handleChange });
    },
};
export const ReadOnly = {
    args: {
        date: new Date(),
        readOnly: true,
    },
    render: (args) => {
        const [{ date }, updateArgs] = useArgs();
        const handleChange = (newDate) => {
            updateArgs({ date: newDate });
            args.onChange?.(newDate);
        };
        return _jsx(InputDate, { ...args, date: date, onChange: handleChange });
    },
};
