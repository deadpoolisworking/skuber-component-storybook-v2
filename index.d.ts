declare module 'skuber-component-storybook' {
  import { FunctionComponent, CSSProperties } from 'react';

  export interface ButtonProps {
    loading?: boolean;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    variant?: 'contained' | 'outlined' | 'text';
    startIcon?: string;
    endIcon?: string;
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
  }

  export const Button: FunctionComponent<ButtonProps>;
}
