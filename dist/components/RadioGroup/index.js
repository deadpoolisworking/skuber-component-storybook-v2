import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../../index.css';
// import './style.css';
import { useState } from 'react';
import Typography from '../Typography';
const RadioGroup = (props) => {
    const { list, groupName, displayRow, defaultValue, onClick, disabled, isSecurity, } = props;
    const [selected, setSelected] = useState(list[defaultValue || 0].key);
    return (_jsx("div", { className: "component-radio-button-container", style: {
            display: displayRow ? 'flex' : 'inline',
            flexDirection: 'row',
            pointerEvents: disabled ? 'none' : 'auto',
            opacity: disabled ? '0.5' : '1',
        }, children: list.map((item, index) => (_jsxs("div", { className: "component-radio-button", onClick: () => {
                if (!disabled) {
                    onClick && onClick(index);
                    setSelected(item.key);
                }
            }, style: {
                marginLeft: displayRow && index !== 0 ? '16px' : '0px',
                marginBottom: isSecurity ? '0' : '17px',
            }, children: [_jsx("div", { className: "component-radio-button-circle", children: selected === item.key && (_jsx("div", { className: "component-radio-button-circle-selected" })) }), _jsx("div", { className: "component-radio-button-label", children: _jsx(Typography, { variant: "b1", weight: "regular", children: item.label }) })] }, `${groupName}-input-${item}-${index}`))) }));
};
export default RadioGroup;
