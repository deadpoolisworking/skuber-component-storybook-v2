import { FunctionComponent } from 'react';
export interface Props {
    icon?: string;
    style?: {};
    onClick?: () => void;
}
declare const IconButton: FunctionComponent<Props>;
export default IconButton;
