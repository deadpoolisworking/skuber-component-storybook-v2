import Tooltip from './index';
export default {
    title: 'Components/Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        style: {
            control: 'object',
        },
        marginX: {
            control: 'number',
        },
        marginY: {
            control: 'number',
        },
        position: {
            control: 'object',
        },
        children: {
            control: 'text',
        },
    },
};
export const Default = {
    args: {
        position: { x: 0, y: 0 },
        marginX: 0,
        marginY: 0,
        children: 'This is a tooltip',
        style: {
            backgroundColor: 'black',
            color: 'white',
            padding: '10px',
            borderRadius: '4px',
        },
    },
};
