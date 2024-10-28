import { jsx as _jsx } from "react/jsx-runtime";
import '../../index.css';
const IconButton = (props) => {
    const { icon, style, onClick } = props;
    const defaultClassName = 'component-icon-button';
    return (_jsx("button", { className: `${defaultClassName}`, onClick: onClick, style: style, children: _jsx("img", { src: icon, alt: "" }) }));
};
export default IconButton;
