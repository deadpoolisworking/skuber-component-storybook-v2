import { jsx as _jsx } from "react/jsx-runtime";
import { useArgs } from '@storybook/preview-api';
import Toggle from './index';
export default {
    title: 'Components/Toggle',
    component: Toggle,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    // argTypes: {
    //   value: {
    //     control: 'boolean',
    //   },
    //   onChange: {
    //     action: 'clicked',
    //   },
    // },
};
export const Default = {
    args: {
        value: false,
        type: 'switch',
    },
    render: (args) => {
        const [{ value }, updateArgs] = useArgs();
        const handleChange = () => {
            updateArgs({ value: !value });
            args.onChange?.();
        };
        return _jsx(Toggle, { ...args, value: value, onChange: handleChange });
    },
};
export const Favorite = {
    args: {
        value: false,
        type: 'favorite',
    },
    render: (args) => {
        const [{ value }, updateArgs] = useArgs();
        const handleChange = () => {
            updateArgs({ value: !value });
            args.onChange?.();
        };
        return _jsx(Toggle, { ...args, value: value, onChange: handleChange });
    },
};
