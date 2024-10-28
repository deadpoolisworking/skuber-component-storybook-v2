import StatusBadge from './index';
export default {
    title: 'Components/StatusBadge',
    component: StatusBadge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        status: {
            control: 'select',
            options: ['good', 'neutral', 'bad', 'etc'],
        },
        children: {
            control: 'text',
        },
        isLoading: {
            control: 'boolean',
        },
    },
};
export const Good = {
    args: {
        status: 'good',
        children: 'Good Status',
        isLoading: false,
    },
};
export const NeutralStatus = {
    args: {
        status: 'neutral',
        children: 'Neutral Status',
        isLoading: false,
    },
};
export const BadStatus = {
    args: {
        status: 'bad',
        children: 'Bad Status',
        isLoading: false,
    },
};
export const Loading = {
    args: {
        status: 'etc',
        children: 'Loading...',
        isLoading: true,
    },
};
