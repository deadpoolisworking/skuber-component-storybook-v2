import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../../index.css';
// import './style.css';
import { useState } from 'react';
import Typography from '../Typography';
const TextArea = (props) => {
    const { style, inputStyle, inputText, maxLength, disabled, defaultValue, leftDecoration, type, placeholderStyle, children, rightDecoration, placeholder, autoFocus, onChange, onPressEnter, onInvalid, } = props;
    /**
     * 스토리북에서 엔터키 눌렀을때 폼 전송되는 것 방지
     * @param event
     */
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    const [focused, setFocused] = useState(defaultValue && defaultValue.toString().length > 0
        ? 'focused'
        : 'unfocused');
    const [inputValue, setInputValue] = useState('');
    const defaultClassName = 'component-textarea';
    const labelClassName = `${defaultClassName}-label${leftDecoration ? '-left-deco' : ''}`;
    const handleChange = (e) => {
        if (onChange)
            onChange(e);
        setInputValue(e.target.value);
    };
    const handleFocus = () => {
        setFocused('focused');
    };
    const handleBlur = (e) => {
        if (e.target.value.length > 0)
            setFocused('focused');
        else
            setFocused('unfocused');
    };
    return (_jsxs("form", { className: `${defaultClassName}`, style: style, onSubmit: handleSubmit, children: [leftDecoration && _jsx("img", { src: leftDecoration, alt: "" }), _jsx("div", { className: `${labelClassName}-${focused}`, onClick: handleFocus, children: _jsx(Typography, { variant: "label", weight: "regular", style: {
                        color: 'var(--text-tertiary)',
                        ...placeholderStyle,
                    }, children: placeholder }) }), _jsx("textarea", { className: `${defaultClassName}-input`, maxLength: maxLength, defaultValue: defaultValue, disabled: disabled, value: inputText, rows: 10, autoFocus: autoFocus || focused === 'focused', onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur, style: inputStyle, onInvalid: onInvalid ? onInvalid : () => { }, onKeyDown: (e) => {
                    if (e.key === 'Enter' && onPressEnter) {
                        e.currentTarget.value = '';
                        onPressEnter(inputValue);
                        return setInputValue('');
                    }
                } }), rightDecoration && _jsx("img", { src: rightDecoration, alt: "" }), children] }));
};
export default TextArea;
