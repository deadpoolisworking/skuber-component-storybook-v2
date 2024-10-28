import Spinner from '../Spinner';
// import '/style.css';
import { CSSProperties, FunctionComponent } from 'react';
import '../../index.css';

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

const Button: FunctionComponent<Props> = (props: Props) => {
  const {
    disabled,
    onClick,
    loading = false,
    size,
    startIcon,
    endIcon,
    style,
    children,
    variant,
    className,
  } = props;

  const defaultClassName = 'component-button';
  const sizeClassName = `${defaultClassName}-${size ? size : 'medium'}`;
  const variantClassName = `${defaultClassName}-${
    variant ? variant : 'contained'
  }`;
  const createAccountDisabledConfirmButtonClassName = `${
    className ? className : ''
  } `;

  return (
    <button
      className={`${defaultClassName} ${sizeClassName} ${variantClassName} ${createAccountDisabledConfirmButtonClassName}`}
      disabled={disabled === undefined ? false : disabled}
      onClick={onClick}
      style={style}
    >
      {startIcon && (
        <img style={{ marginRight: '8px' }} src={startIcon} alt="" />
      )}
      {loading ? (
        <Spinner style={{ width: '44px', height: '44px' }} />
      ) : (
        children
      )}
      {endIcon && <img src={endIcon} alt="" />}
    </button>
  );
};

export default Button;
