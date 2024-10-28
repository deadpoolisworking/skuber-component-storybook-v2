import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import '../../index.css';
// import './style.css';
import { closeIconSvg } from 'assets';
import Typography from '../Typography';
const Toast = (props) => {
    const { type = 'default', label, children, deleteTapped } = props;
    const defaultToggleClassName = 'component-toast';
    const handleDeleteClick = () => deleteTapped && deleteTapped(true);
    return (_jsxs("div", { className: `${defaultToggleClassName} `, children: [_jsx(Typography, { variant: "b1", weight: "medium", children: label }), type === 'action' && children && _jsx(_Fragment, { children: children }), _jsx("img", { src: closeIconSvg, className: "component-toast-delete", alt: "", onClick: handleDeleteClick })] }));
};
export default Toast;
