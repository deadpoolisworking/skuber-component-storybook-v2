import { default as React } from 'react';
export interface Props {
    type?: 'center' | 'left';
    content?: string;
    children: React.ReactNode;
    parentPosition?: {
        x: number;
        y: number;
    };
    title?: string;
    style?: any;
    titleStyle?: any;
    contentIcon?: string;
}
declare const Helper: React.FC<Props>;
export default Helper;
