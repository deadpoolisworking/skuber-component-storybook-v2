import { jsx as _jsx } from "react/jsx-runtime";
import Toast from './index';
export default {
    title: 'Components/Toast',
    component: Toast,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export const Default = {
    args: {
        type: 'default',
        label: 'Toast Sample Text',
    },
    render: (args) => {
        const handleChange = () => args.deleteTapped?.(true);
        return _jsx(Toast, { ...args, label: args.label, deleteTapped: handleChange });
    },
};
