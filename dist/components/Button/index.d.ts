import { CSSProperties, FunctionComponent } from 'react';
export interface Props {
    loading?: boolean;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    variant?: 'contained' | 'outlined' | 'text';
    startIcon?: string;
    endIcon?: string;
    className?: string;
    style?: CSSProperties;
    children?: any;
    onClick?: () => void;
}
declare const Button: FunctionComponent<Props>;
export default Button;
