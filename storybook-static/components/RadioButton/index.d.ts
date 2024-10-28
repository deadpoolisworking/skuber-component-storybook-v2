import { FunctionComponent } from '../../../node_modules/react';
export interface Props {
    title: string;
    isSelected: boolean | undefined;
    disabled?: boolean;
    onChange?: () => void;
    style?: any;
}
declare const RadioButton: FunctionComponent<Props>;
export default RadioButton;
