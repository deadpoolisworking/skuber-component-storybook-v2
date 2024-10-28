import Spinner from './index';
import './style.css';
const meta = {
    title: 'Components/Spinner',
    component: Spinner,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    args: {
        wrapperStyle: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },
};
