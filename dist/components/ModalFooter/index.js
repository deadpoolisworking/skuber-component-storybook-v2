import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../../index.css';
// import './style.css';
import { useState } from 'react';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Spinner from '../Spinner';
import Typography from '../Typography';
const ModalFooter = (props) => {
    const { loading, hideOption, hideOptionText, leftButtonTitle, cancelButtonTitle, confirmButtonTitle, isConfirmButtonDisabled, style, onClose, onConfirm, onClickLeftButton, } = props;
    const [checked, setChecked] = useState(false);
    const onHandleOption = () => setChecked(!checked);
    const onHandleConfirm = () => onConfirm(checked);
    return (_jsxs("div", { className: "modal-footer", style: { ...style }, children: [_jsxs("div", { className: "modal-footer-left-container", children: [leftButtonTitle && (_jsx(Button, { size: "medium", variant: "outlined", style: {
                            width: '60px',
                            height: '32px',
                            opacity: '1',
                            cursor: 'pointer',
                        }, onClick: onClickLeftButton, children: leftButtonTitle })), hideOption && (_jsxs("div", { className: "modal-footer-hide-container", onClick: onHandleOption, children: [_jsx(Checkbox, { checked: checked, onChange: onHandleOption }), _jsx(Typography, { variant: "b1", weight: "regular", style: {
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    marginLeft: '4px',
                                }, children: hideOptionText === '' ? 'Do not show again' : hideOptionText })] }))] }), _jsxs("div", { className: "modal-footer-right-container", children: [cancelButtonTitle && (_jsx(Button, { size: "medium", variant: "outlined", style: {
                            width: '60px',
                            height: '32px',
                            cursor: 'pointer',
                        }, onClick: onClose, children: cancelButtonTitle })), confirmButtonTitle && (_jsx(Button, { className: "button", size: "medium", variant: "contained", onClick: onHandleConfirm, disabled: loading || isConfirmButtonDisabled, children: loading ? (_jsx(Spinner, { style: { width: '40px', height: '40px', paddingTop: '4px' } })) : (confirmButtonTitle) }))] })] }));
};
export default ModalFooter;
