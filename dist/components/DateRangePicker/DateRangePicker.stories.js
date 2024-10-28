import { jsx as _jsx } from "react/jsx-runtime";
import { useArgs } from '@storybook/preview-api';
import DateRangePicker from './index';
export default {
    title: 'Components/DateRangePicker',
    component: DateRangePicker,
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
        onResetClick: {
            action: 'Reset clicked',
        },
        onSubmitClick: {
            action: 'Submit clicked',
        },
        onCancelClick: {
            action: 'Cancel clicked',
        },
    },
};
export const Default = {
    args: {
        from: null,
        to: null,
    },
    render: (args) => {
        const [{ from, to }, updateArgs] = useArgs();
        const handleFromChange = (date) => {
            updateArgs({ from: date });
            args.onFromChange?.(date);
        };
        const handleToChange = (date) => {
            updateArgs({ to: date });
            args.onToChange?.(date);
        };
        const handleSubmitClick = () => {
            if (args.onSubmitClick) {
                args.onSubmitClick({ start: from, end: to });
            }
        };
        const handleCancelClick = () => {
            updateArgs({ from: null, to: null });
            if (args.onCancelClick) {
                args.onCancelClick();
            }
        };
        const handleResetClick = () => {
            updateArgs({ from: null, to: null });
        };
        return (_jsx(DateRangePicker, { ...args, from: from, to: to, onFromChange: handleFromChange, onToChange: handleToChange, onSubmitClick: handleSubmitClick, onCancelClick: handleCancelClick, onResetClick: handleResetClick }));
    },
};
