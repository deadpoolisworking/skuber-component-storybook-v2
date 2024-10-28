import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';
const Helper = ({ type = 'center', children, title, style, titleStyle, content, contentIcon, }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });
    const childrenRef = useRef(null);
    useEffect(() => {
        if (childrenRef.current) {
            const rect = childrenRef.current.getBoundingClientRect();
            setPosition({
                x: rect.left + rect.width / 2,
                y: rect.bottom + 10,
            });
        }
    }, [isHovered, childrenRef]);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    const component = (_jsx("div", { style: {
            display: 'flex',
            flexDirection: contentIcon ? 'row' : 'column',
            justifyContent: 'center',
        }, children: isHovered && content && (_jsxs("div", { className: `fixed-helper ${type}`, style: { left: position.x, top: position.y }, children: [type === 'left' ? (_jsx("div", { className: "fixed-helper-triangle-left" })) : (_jsx("div", { className: "fixed-helper-triangle-center" })), title && (_jsx("div", { style: {
                        marginBottom: '10px',
                        ...titleStyle,
                    }, children: title })), content, contentIcon && (_jsxs("div", { style: { display: 'flex', flexDirection: 'row' }, children: ['(', _jsx("img", { width: 16, height: 16, src: contentIcon, alt: "", style: { marginTop: '1px' } }), ')'] }))] })) }));
    return (_jsxs("div", { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, style: { display: 'inline-block', position: 'relative', ...style }, children: [_jsx("div", { ref: childrenRef, children: children }), ReactDOM.createPortal(component, document.body)] }));
};
export default Helper;
