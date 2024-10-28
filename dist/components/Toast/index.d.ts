import { FunctionComponent } from 'react';
export interface Props {
    type: 'default' | 'action';
    label?: string;
    children?: any;
    deleteTapped?: (tapped: boolean) => void;
}
declare const Toast: FunctionComponent<Props>;
export default Toast;
