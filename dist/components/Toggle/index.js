import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import '../../index.css';
// import './style.css';
import { defaultStar, selectedStar } from 'assets';
const Toggle = (props) => {
    const { type, value, onChange } = props;
    const defaultContainerClassName = 'component-toggle-container';
    const defaultToggleClassName = 'component-toggle-toggle';
    return (_jsx(_Fragment, { children: type === 'switch' ? (_jsx("div", { className: `${defaultContainerClassName} ${defaultContainerClassName}-${value ? 'on' : 'off'}`, style: { cursor: 'pointer' }, onClick: onChange, children: _jsx("div", { className: `${defaultToggleClassName} ${defaultToggleClassName}-${value ? 'on' : 'off'}` }) })) : (_jsx("img", { width: 20, height: 20, src: value ? selectedStar : defaultStar, onClick: onChange, alt: "", style: { cursor: 'pointer' } })) }));
};
export default Toggle;
