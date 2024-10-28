import { jsx as _jsx } from "react/jsx-runtime";
import { useArgs } from '@storybook/preview-api';
import RangeCalendar from './index';
export default {
    title: 'Components/RangeCalendar',
    component: RangeCalendar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        from: {
            control: 'date',
        },
        to: {
            control: 'date',
        },
        onFromChange: {
            action: 'from date changed',
        },
        onToChange: {
            action: 'to date changed',
        },
    },
};
export const Default = {
    args: {
        from: new Date(2023, 0, 1),
        to: new Date(2023, 11, 31),
    },
    render: (args) => {
        const [{ from, to }, updateArgs] = useArgs();
        const handleFromChange = (newFromDate) => {
            updateArgs({ from: newFromDate });
            args.onFromChange?.(newFromDate);
        };
        const handleToChange = (newToDate) => {
            updateArgs({ to: newToDate });
            args.onToChange?.(newToDate);
        };
        return (_jsx(RangeCalendar, { ...args, from: from, to: to, onFromChange: handleFromChange, onToChange: handleToChange }));
    },
};
