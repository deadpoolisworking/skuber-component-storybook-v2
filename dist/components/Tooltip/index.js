import { jsx as _jsx } from "react/jsx-runtime";
import '../../index.css';
const Tooltip = (props) => {
    const { style, position, children, marginX, marginY } = props;
    return (_jsx("div", { className: "tooltip-container", style: {
            transform: `translate(${position.x - marginX}px, ${position.y - marginY}px)`,
            ...style,
        }, children: children ? children : 'test' }));
};
export default Tooltip;
