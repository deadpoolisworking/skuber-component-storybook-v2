import { FunctionComponent } from 'react';
export interface Props {
    checked?: boolean;
    label?: string;
    style?: any;
    onChange?: (checked: boolean) => void;
}
declare const Checkbox: FunctionComponent<Props>;
export default Checkbox;
