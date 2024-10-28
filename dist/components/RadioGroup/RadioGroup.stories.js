import RadioGroup from './index'; // Adjust the path if necessary
export default {
    title: 'Components/RadioGroup',
    component: RadioGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        list: {
            control: 'object',
        },
        groupName: {
            control: 'text',
        },
        displayRow: {
            control: 'boolean',
        },
        defaultValue: {
            control: 'number',
        },
        onClick: {
            action: 'clicked',
        },
        disabled: {
            control: 'boolean',
        },
    },
};
export const Default = {
    args: {
        list: [
            { key: 'option1', label: 'Option 1' },
            { key: 'option2', label: 'Option 2' },
            { key: 'option3', label: 'Option 3' },
        ],
        groupName: 'defaultRadioGroup',
        displayRow: false,
        defaultValue: 0,
        disabled: false,
    },
};
export const RowLayout = {
    args: {
        list: [
            { key: 'option1', label: 'Option 1' },
            { key: 'option2', label: 'Option 2' },
            { key: 'option3', label: 'Option 3' },
        ],
        groupName: 'rowRadioGroup',
        displayRow: true,
        defaultValue: 1,
        disabled: false,
    },
};
export const Disabled = {
    args: {
        list: [
            { key: 'option1', label: 'Option 1' },
            { key: 'option2', label: 'Option 2' },
        ],
        groupName: 'disabledRadioGroup',
        displayRow: false,
        defaultValue: 0,
        disabled: true,
    },
};
