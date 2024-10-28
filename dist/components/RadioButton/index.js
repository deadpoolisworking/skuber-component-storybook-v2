import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Typography from '../Typography';
import radioSelected from 'assets/svg/radio_button_selected.svg';
import radioDefault from 'assets/svg/radio_button_default.svg';
import '../../index.css';
const RadioButton = (props) => {
    const { title, isSelected, onChange, style } = props;
    return (_jsxs("div", { className: "single-radio-button-container", onClick: onChange, style: style, children: [_jsx("img", { className: "single-radio-button", src: isSelected ? radioSelected : radioDefault, alt: "" }), _jsx(Typography, { variant: "b1", weight: "regular", children: title })] }));
};
export default RadioButton;
