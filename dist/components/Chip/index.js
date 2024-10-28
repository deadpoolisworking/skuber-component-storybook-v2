import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { tagClose, warningSvg } from 'assets';
import '../../index.css';
// import './style.css';
import Typography from '../Typography';
const Chip = (props) => {
    const { selected = false, hasDelete = false, hasIcon = false, label, onChange, deletedTapped, } = props;
    const handleClick = () => onChange && onChange(!selected);
    const handleDeleteClick = () => deletedTapped && label && deletedTapped(label);
    return (_jsxs("div", { className: `component-chip ${selected && 'component-chip-selected'}`, onClick: handleClick, children: [hasIcon && _jsx("img", { src: warningSvg, alt: "" }), label && (_jsx(Typography, { variant: "b1", weight: "regular", children: label })), hasDelete && (_jsx("img", { src: tagClose, className: "component-chip-tag", onClick: handleDeleteClick, alt: "" }))] }));
};
export default Chip;
