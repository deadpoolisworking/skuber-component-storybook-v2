import { jsx as _jsx } from "react/jsx-runtime";
import { useArgs } from '@storybook/preview-api';
import InputTime from './index';
export default {
    title: 'Components/InputTime',
    component: InputTime,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        time: {
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
        time: new Date(),
        readOnly: false,
    },
    render: (args) => {
        const [{ time }, updateArgs] = useArgs();
        const handleChange = (newTime) => {
            updateArgs({ time: newTime });
            args.onChange?.(newTime);
        };
        return _jsx(InputTime, { ...args, time: time, onChange: handleChange });
    },
};
export const ReadOnly = {
    args: {
        time: new Date(),
        readOnly: true,
    },
    render: (args) => {
        const [{ time }, updateArgs] = useArgs();
        const handleChange = (newTime) => {
            updateArgs({ time: newTime });
            args.onChange?.(newTime);
        };
        return _jsx(InputTime, { ...args, time: time, onChange: handleChange });
    },
};
