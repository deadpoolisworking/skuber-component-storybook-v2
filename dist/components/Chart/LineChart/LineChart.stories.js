import CustomLineChart from '.';
import './style.css';
const meta = {
    title: 'Components/Charts/CustomLineChart',
    component: CustomLineChart,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    args: {
        chartName: 'Sample Chart',
        data: [
            { timestamp: 0, v1: 6, v2: 4 },
            { timestamp: 10, v1: 6, v2: 5 },
            { timestamp: 20, v1: 6, v2: 4 },
            { timestamp: 30, v1: 7, v2: 5 },
            { timestamp: 40, v1: 7, v2: 6 },
            { timestamp: 50, v1: 7, v2: 5 },
            { timestamp: 60, v1: 8, v2: 6 },
            { timestamp: 70, v1: 8, v2: 7 },
            { timestamp: 80, v1: 8, v2: 6 },
            { timestamp: 90, v1: 8, v2: 5 },
            { timestamp: 100, v1: 7, v2: 6 },
            { timestamp: 110, v1: 7, v2: 5 },
            { timestamp: 120, v1: 7, v2: 4 },
            { timestamp: 130, v1: 7, v2: 5 },
            { timestamp: 140, v1: 6, v2: 4 },
        ],
        values: [0, 1],
        width: 360,
        height: 64,
    },
    parameters: {
        docs: {
            storyDescription: '-',
        },
    },
};
export const LoadingChart = {
    args: {
        chartName: 'Loading Chart',
        data: [],
        loading: true,
    },
    parameters: {
        docs: {
            storyDescription: '-',
        },
    },
};
