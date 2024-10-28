import { jsx as _jsx } from "react/jsx-runtime";
import '../../index.css';
import { forwardRef } from 'react';
const Typography = forwardRef((props, ref) => {
    const { variant, weight, style, ellipsis, children, onClick } = props;
    const defaultClassName = 'component-typography';
    const variantClassName = `${defaultClassName}-${variant === undefined ? 's1' : variant}`;
    const weightClassName = `${variantClassName}-${weight === undefined ? 'bold' : weight}`;
    const ellipsisClassName = `${defaultClassName}-${ellipsis === undefined ? 'non-ellipsis' : 'ellipsis'}`;
    return (_jsx("div", { className: `${defaultClassName} ${variantClassName} ${weightClassName} ${ellipsisClassName}`, style: { ...style }, onClick: onClick, ref: ref, children: children }));
});
export default Typography;
