import { FunctionComponent } from '../../../node_modules/react';
interface Props {
    title?: string;
    size?: 'small' | 'medium';
    type?: 'default' | 'context';
    search?: boolean;
    searchPlaceHolder?: string;
    disabled?: boolean;
    disabledText?: string;
    isError?: boolean;
    helperText?: string;
    options: string[];
    style?: any;
    onSelect?: (index: number) => void;
}
declare const Dropdown: FunctionComponent<Props>;
export default Dropdown;
