import { jsx as _jsx } from "react/jsx-runtime";
import Helper from './index';
export default {
    title: 'Components/Helper',
    component: Helper,
    parameters: {
        layout: 'centered',
        controls: { exclude: ['children'] },
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: false,
            options: ['left', 'center'],
        },
        content: {
            control: 'text',
        },
        title: {
            control: 'text',
        },
        style: {
            control: 'object',
        },
        titleStyle: {
            control: 'object',
        },
        parentPosition: {
            control: 'object',
        },
        children: {
            control: false,
        },
    },
};
export const Default = {
    args: {
        type: 'center',
        content: 'Butto2211n name',
    },
    render: (args) => (_jsx(Helper, { ...args, children: _jsx("button", { children: "Helper" }) })),
};
export const helpPopover = {
    args: {
        type: 'left',
        title: 'Title',
        content: 'This is a message inside a HelpPopover. This is a message inside a HelpPopover. This is a message inside a HelpPopover.',
    },
    render: (args) => (_jsx(Helper, { ...args, children: _jsx("button", { children: "?" }) })),
};
export const helpPopoverNoTitle = {
    args: {
        type: 'left',
        content: 'This is a message inside a HelpPopover. This is a message inside a HelpPopover. This is a message inside a HelpPopover.',
    },
    render: (args) => (_jsx(Helper, { ...args, children: _jsx("button", { children: "?" }) })),
};
