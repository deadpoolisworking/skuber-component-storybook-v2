import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Spinner from '../Spinner';
import '../../index.css';
const Button = (props) => {
    const { disabled, onClick, loading = false, size, startIcon, endIcon, style, children, variant, className, } = props;
    const defaultClassName = 'component-button';
    const sizeClassName = `${defaultClassName}-${size ? size : 'medium'}`;
    const variantClassName = `${defaultClassName}-${variant ? variant : 'contained'}`;
    const createAccountDisabledConfirmButtonClassName = `${className ? className : ''} `;
    return (_jsxs("button", { className: `${defaultClassName} ${sizeClassName} ${variantClassName} ${createAccountDisabledConfirmButtonClassName}`, disabled: disabled === undefined ? false : disabled, onClick: onClick, style: style, children: [startIcon && (_jsx("img", { style: { marginRight: '8px' }, src: startIcon, alt: "" })), loading ? (_jsx(Spinner, { style: { width: '44px', height: '44px' } })) : (children), endIcon && _jsx("img", { src: endIcon, alt: "" })] }));
};
export default Button;
