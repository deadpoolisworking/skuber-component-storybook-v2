import Calendar from '.';
import './style.css';
const meta = {
    title: 'Components/Calendar',
    component: Calendar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    args: {
        selectedDate: new Date(),
    },
    parameters: {
        docs: {
            storyDescription: '-',
        },
    },
};
