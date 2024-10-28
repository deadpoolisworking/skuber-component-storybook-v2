import HorizontalBar from '.';
import './style.css';
const meta = {
    title: 'Components/Charts/HorizontalBar',
    component: HorizontalBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    args: {
        value: 30,
    },
    parameters: {
        docs: {
            storyDescription: '-',
        },
    },
};
