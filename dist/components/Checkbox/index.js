import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { checkBox } from 'assets';
import '../../index.css';
const Checkbox = (props) => {
    const { checked = false, label, style, onChange } = props;
    const handleClick = () => onChange && onChange(!checked);
    return (_jsxs("div", { className: "component-checkbox", style: { cursor: 'pointer', ...style }, onClick: handleClick, children: [_jsx("div", { className: `component-checkbox-rect component-checkbox-rect-${checked ? 'checked' : 'unchecked'}`, children: checked && _jsx("img", { src: checkBox, alt: "" }) }), label && _jsx("div", { className: "component-checkbox-label", children: label })] }));
};
export default Checkbox;
