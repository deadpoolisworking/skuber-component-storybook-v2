import ModalHeader from '.';
import './style.css';
import { infoWhite } from 'assets';
const meta = {
    title: 'Components/ModalHeader',
    component: ModalHeader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    args: {
        title: 'Modal Sample Header',
        style: { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
    },
    parameters: {
        docs: {
            storyDescription: '기본 Modal Header 입니다.',
        },
    },
};
export const IconHeader = {
    args: {
        title: 'Modal Sample Header',
        leftDecoration: infoWhite,
        style: { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
    },
    parameters: {
        docs: {
            storyDescription: 'Icon이 들어간 Modal Header 입니다.',
        },
    },
};
