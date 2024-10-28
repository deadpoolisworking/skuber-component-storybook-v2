import IconButton from './index';
export default {
    title: 'Components/IconButton',
    component: IconButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        icon: {
            control: 'text',
        },
        style: {
            control: 'object',
        },
        onClick: {
            action: 'clicked',
        },
    },
};
export const Default = {
    args: {
        icon: 'https://via.placeholder.com/32',
        style: { width: '50px', height: '50px', borderRadius: '50%' },
    },
};
