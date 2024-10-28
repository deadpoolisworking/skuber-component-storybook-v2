import { ChangeEvent, FunctionComponent, FormEvent } from '../../../node_modules/react';
/**
 * onPressEnter : 엔터 눌렀을 때의 동작 정의
 */
export interface Props {
    style?: any;
    inputStyle?: any;
    inputText?: string;
    children?: any;
    maxLength?: number;
    disabled?: boolean;
    placeholderStyle?: any;
    leftDecoration?: string;
    rightDecoration?: string;
    type?: 'email' | 'text' | 'password' | 'number';
    helperText?: string;
    placeholder?: string | number | null;
    defaultValue?: string | number;
    autoFocus?: boolean;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    onPressEnter?: (value: string) => void;
    onInvalid?: (e: FormEvent<HTMLTextAreaElement>) => void;
}
declare const TextArea: FunctionComponent<Props>;
export default TextArea;
