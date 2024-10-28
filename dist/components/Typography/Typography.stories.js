import Typography from './index';
export default {
    title: 'Components/Typography',
    component: Typography,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['h1', 'h2', 's1', 'b1', 'b2', 'label', 'link', 'code'],
        },
        weight: {
            control: 'select',
            options: ['bold', 'semi-bold', 'medium', 'regular', 'thin'],
        },
        style: {
            control: 'object',
        },
        children: {
            control: 'text',
        },
        onClick: {
            action: 'clicked',
        },
    },
};
export const Default = {
    args: {
        variant: 'b1',
        weight: 'bold',
        children: 'wondermove s-kuber design system0',
    },
};
export const h1 = {
    args: {
        variant: 'h1',
        children: 'wondermove s-kuber design system1',
    },
    parameters: {
        controls: { exclude: ['weight'] },
    },
};
export const h2 = {
    args: {
        variant: 'h2',
        children: 'wondermove s-kuber design system',
    },
    parameters: {
        controls: { exclude: ['weight'] },
    },
};
export const s1 = {
    args: {
        variant: 's1',
        children: 'wondermove s-kuber design system',
    },
    parameters: {
        controls: { exclude: ['weight'] },
    },
};
export const b1 = {
    args: {
        variant: 'b1',
        weight: 'bold',
        children: 'wondermove s-kuber design system',
    },
};
export const b2 = {
    args: {
        variant: 'b2',
        weight: 'bold',
        children: 'wondermove s-kuber design system',
    },
    argTypes: {
        weight: {
            control: 'select',
            options: ['bold', 'regular'],
        },
    },
};
export const label = {
    args: {
        variant: 'label',
        weight: 'bold',
        children: 'wondermove s-kuber design system',
    },
    argTypes: {
        weight: {
            control: 'select',
            options: ['bold', 'medium', 'regular'],
        },
    },
};
export const link = {
    args: {
        variant: 'link',
        children: 'wondermove s-kuber design system',
    },
    parameters: {
        controls: { exclude: ['weight'] },
    },
};
export const code = {
    args: {
        variant: 'code',
        children: 'wondermove s-kuber design system',
    },
    parameters: {
        controls: { exclude: ['weight'] },
    },
};
