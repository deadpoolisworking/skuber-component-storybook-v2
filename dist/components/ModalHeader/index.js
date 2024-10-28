import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../../index.css';
// import './style.css';
import Typography from '../Typography';
import closeIcon from 'assets/svg/modal_close_button.svg';
const ModalHeader = (props) => {
    const { leftDecoration, children, style, title, onClose } = props;
    return (_jsxs("div", { className: "modal-header", style: style, children: [_jsxs("div", { className: "modal-header-left-container", children: [leftDecoration && (_jsx("img", { width: 20, height: 20, src: leftDecoration, alt: "" })), _jsx(Typography, { variant: "s1", weight: "bold", children: title })] }), _jsxs("div", { className: "modal-header-right-container", children: [children, _jsx("img", { className: "modal-close-icon", src: closeIcon, onClick: onClose, alt: "" })] })] }));
};
export default ModalHeader;
