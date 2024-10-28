import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import searchIcon from 'assets/svg/search.svg';
import '../../index.css';
// import './style.css';
import { useState, useEffect, useRef, } from 'react';
import Typography from '../Typography';
import { arrowDownSvg, arrowUpSvg, triangleDownSvg, triangleUpSvg, } from 'assets';
const InputField = (props) => {
    const { type = 'default', valid = true, inputText, disabled = false, defaultValue, leftDecoration, leftTextDecoration, inputType, children, rightDecoration, secondRightDecoration, error = false, errorText, placeholder, autoFocus, min, max, maxLength = 253, category = [], style, inputStyle, placeholderStyle, secondRightStyle, rightStyle, onChange, onPressEnter, onInvalid, rightDecorationTapped, secondRightDecorationTapped, } = props;
    const [isOpen, setIsOpen] = useState(false);
    const inputFieldRef = useRef(null);
    const [focused, setFocused] = useState((inputText && inputText.length > 0) || (defaultValue && defaultValue.length)
        ? 'focused'
        : 'unfocused');
    const [inputValue, setInputValue] = useState(inputType === 'number' ? inputText || '1' : defaultValue);
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
    // const [inputFieldBackgroundColor, setInputFieldBackgroundColor] =
    //   useState<string>('');
    const defaultClassName = 'component-inputfield';
    const labelClassName = `${defaultClassName}-label${leftDecoration ? '-left-deco' : ''}`;
    const errorTextStyle = {
        color: 'var(--status-danger)',
        marginTop: '-18px',
        fontSize: 'var(--body-label-bold-size)',
        fontWeight: '400',
        position: 'absolute',
        top: '57px',
        left: '-1px',
    };
    useEffect(() => {
        setInputValue(inputText || '');
    }, [inputText]);
    useEffect(() => {
        disabled && setFocused('focused');
    }, [disabled]);
    // useEffect(() => {
    //   if (inputFieldRef.current) {
    //     const computedStyle = getComputedStyle(inputFieldRef.current);
    //     const bgColor = computedStyle.backgroundColor;
    //     setInputFieldBackgroundColor(bgColor);
    //   }
    // }, []);
    const formatTimeInput = (value) => {
        if (/^\d{4}$/.test(value)) {
            const hours = Math.min(23, parseInt(value.slice(0, 2), 10)); // 시간은 23을 초과하지 않음
            const minutes = Math.min(59, parseInt(value.slice(2), 10)); // 분은 59를 초과하지 않음
            return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`; // 00:00 형식으로 반환
        }
        return value;
    };
    const handleSubmit = (event) => event.preventDefault();
    const handleFocus = () => setFocused('focused');
    const handleChange = (e) => {
        if (inputType === 'custom-time') {
            let newValue = e.target.value;
            newValue = newValue.replace(/[^0-9]/g, ''); // 숫자 이외의 입력 제거
            if (newValue.length > 4)
                newValue = newValue.slice(0, 4); // 최대 4자리까지만 입력 허용
            newValue = formatTimeInput(newValue); // 시간 형식으로 변환
            if (onChange)
                onChange(e);
            setInputValue(newValue);
        }
        else {
            const newValue = inputType === 'number'
                ? Number(e.target.value) >= 0
                    ? e.target.value
                    : '0'
                : e.target.value;
            if (onChange)
                type === 'searchFilter'
                    ? onChange(e, selectedCategoryIndex)
                    : onChange(e);
            setInputValue(newValue);
        }
    };
    const handleBlur = (e) => {
        if (inputType === 'custom-time' && !e.target.value) {
            setInputValue('00:00');
            return;
        }
        if (e.target.value.length > 0)
            setFocused('focused');
        else
            setFocused('unfocused');
    };
    const incrementValue = () => {
        const newValue = String(Number(inputValue) + 1);
        setInputValue(newValue);
        if (onChange)
            onChange({
                target: { value: newValue },
            });
    };
    const decrementValue = () => {
        const newValue = String(Number(inputValue) - 1);
        setInputValue(newValue);
        if (Number(inputValue) < 0)
            setInputValue('0');
        if (onChange)
            onChange({
                target: { value: newValue },
            });
    };
    const handleOpenCategory = () => setIsOpen((prev) => !prev);
    const handleCategory = (index) => {
        setSelectedCategoryIndex(index);
        setIsOpen(false);
    };
    return (_jsx(_Fragment, { children: type === 'default' ? (_jsx(_Fragment, { children: _jsxs("form", { ref: inputFieldRef, className: `${defaultClassName}`, style: {
                    ...style,
                    border: error
                        ? '1px solid var(--status-danger)'
                        : !valid
                            ? '1px solid var(--status-danger)'
                            : '',
                    marginBottom: '5px',
                }, onSubmit: handleSubmit, children: [leftDecoration && _jsx("img", { src: leftDecoration, alt: "" }), leftTextDecoration && (_jsx(Typography, { variant: "b1", weight: "thin", children: leftTextDecoration })), !disabled && (_jsx("div", { className: `${labelClassName}-${focused}`, onClick: handleFocus, children: _jsx(Typography, { variant: "label", weight: "regular", style: {
                                color: 'var(--text-tertiary)',
                                padding: '0px 4px',
                                backgroundColor: `#363636`,
                                marginTop: focused === 'focused' ? '-2px' : '',
                                ...placeholderStyle,
                            }, children: placeholder }) })), _jsx("input", { className: `${defaultClassName}-input`, defaultValue: defaultValue, disabled: disabled, value: inputType === 'number'
                            ? Number(inputValue) <= 1
                                ? 1
                                : inputValue
                            : inputValue, autoFocus: autoFocus || focused === 'focused', type: !inputType ? 'text' : inputType === 'uid' ? 'text' : inputType, min: inputType === 'number' && min ? min : undefined, max: inputType === 'number' && max ? max : undefined, onChange: (e) => handleChange && handleChange(e), onFocus: handleFocus, maxLength: maxLength, onBlur: (e) => handleBlur && handleBlur(e), style: {
                            ...inputStyle,
                            color: disabled && 'gray',
                        }, onInvalid: onInvalid ? onInvalid : () => { }, onKeyDown: (e) => {
                            if (e.key === 'Enter' && onPressEnter)
                                onPressEnter(inputValue);
                        } }), inputType === 'number' && !disabled && (_jsxs("div", { className: "number-spinner", children: [_jsx("div", { className: "increment", onClick: incrementValue, children: _jsx("img", { src: triangleUpSvg, alt: "up", style: { width: '10px' } }) }), _jsx("div", { className: "decrement", onClick: decrementValue, children: _jsx("img", { src: triangleDownSvg, alt: "down", style: { width: '10px' } }) })] })), rightDecoration && (_jsx("img", { src: rightDecoration, style: rightStyle, alt: "", className: "input-right-deco", onClick: rightDecorationTapped })), secondRightDecoration && (_jsx("img", { src: secondRightDecoration, alt: "", style: secondRightStyle, onClick: secondRightDecorationTapped })), children, error && (_jsx(Typography, { style: errorTextStyle, children: errorText }))] }) })) : (_jsx(_Fragment, { children: _jsxs("form", { ref: inputFieldRef, className: `${defaultClassName}`, style: { marginBottom: '5px', padding: '0px' }, onSubmit: handleSubmit, children: [_jsxs("div", { className: "component-input-category", onClick: handleOpenCategory, children: [_jsx(Typography, { variant: "b1", weight: "regular", style: {
                                    color: 'var(--text-ui-text-secondary)',
                                    marginRight: '20px',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    maxWidth: '100%',
                                }, children: category ? category[selectedCategoryIndex] : '-' }), _jsx("img", { 
                                // className={`${itemClassName}-triangle`}
                                src: isOpen ? arrowUpSvg : arrowDownSvg, alt: "" }), isOpen && (_jsx("div", { className: `component-input-category-wrapper`, children: category &&
                                    category.length > 0 &&
                                    category.map((singleCategory, index) => (_jsx("div", { className: `component-input-category-item`, onClick: (e) => {
                                            e.stopPropagation();
                                            handleCategory(index);
                                        }, children: _jsx(Typography, { variant: "b1", weight: "regular", style: {
                                                color: 'var(--text-ui-text-secondary)',
                                            }, children: singleCategory }) }, index))) }))] }), _jsx("div", { className: "component-input-category-divider" }), _jsx("img", { src: searchIcon, alt: "" }), _jsx("input", { className: `${defaultClassName}-input`, defaultValue: defaultValue, placeholder: "Search", disabled: disabled, value: inputValue, autoFocus: autoFocus || focused === 'focused', type: 'text', onChange: (e) => handleChange && handleChange(e), onFocus: handleFocus, onBlur: (e) => handleBlur && handleBlur(e), style: { ...inputStyle, margin: '10px' }, onInvalid: onInvalid ? onInvalid : () => { }, onKeyDown: (e) => {
                            if (e.key === 'Enter' && onPressEnter)
                                onPressEnter(inputValue);
                        } })] }) })) }));
};
export default InputField;
