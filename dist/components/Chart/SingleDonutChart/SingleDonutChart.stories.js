import SingleDonutChart from '.';
import './style.css';
const meta = {
    title: 'Components/Charts/SingleDonutChart',
    component: SingleDonutChart,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    args: {
        percentage: '23',
        capacity: '192',
        loading: false,
    },
    parameters: {
        docs: {
            storyDescription: '-',
        },
    },
};
export const LoadingChart = {
    args: {
        loading: true,
    },
    parameters: {
        docs: {
            storyDescription: '-',
        },
    },
};
