import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import '../../index.css';
// import './style.css';
import searchIcon from 'assets/svg/search.svg';
import { useEffect, useRef, useState } from 'react';
import Typography from '../Typography';
import { arrowDownSvg, arrowUpSvg, checkWhiteSvg, hamburgerIcon } from 'assets';
const Dropdown = (props) => {
    const { title, size = 'small', type = 'default', search, searchPlaceHolder = '', disabledText, helperText = '', disabled = false, isError = false, options = [], onSelect, style, } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const dropMenuRef = useRef(null);
    const defaultClassName = 'component-dropdown';
    const sizeClassName = `dropdown-${size}`;
    const disabledClassName = disabled ? `dropdown-disabled` : '';
    const itemClassName = `${defaultClassName}-item`;
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
    const [filteredOptions, setFilteredOptions] = useState(options);
    //* lifecycle
    useEffect(() => {
        if (searchInput)
            filterOption();
        else
            setFilteredOptions(options);
    }, [searchInput]);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropMenuRef.current &&
                !dropMenuRef.current.contains(event.target))
                setIsOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    const handleOptionClick = (index) => {
        let resultIndex;
        setIsOpen(false);
        if (searchInput)
            resultIndex = options.findIndex((option) => option === filteredOptions[index]);
        else
            resultIndex = index;
        setSelectedOptionIndex(resultIndex);
        onSelect && onSelect(resultIndex);
    };
    //* handler
    const toggleDropdown = () => !disabled && setIsOpen(!isOpen);
    const onChangeSearchInput = (input) => setSearchInput(input);
    const filterOption = () => {
        const lowercasedInput = searchInput.toLowerCase();
        const filtered = options.filter((option) => option.toLowerCase().includes(lowercasedInput));
        setFilteredOptions(filtered);
    };
    return (_jsxs("div", { className: "component-dropdown-wrapper", style: style, children: [_jsxs("div", { className: `${defaultClassName} ${type === 'default' && sizeClassName} ${type === 'default' && disabledClassName}`, style: {
                    borderWidth: type === 'context' ? '0px' : '1px',
                    borderRadius: type === 'context' ? '12px' : '8px',
                    borderColor: type === 'default' && isError ? '#EB4136' : isOpen ? '#125aed' : '',
                    backgroundColor: isOpen ? 'transparent' : '',
                }, ref: dropMenuRef, children: [_jsx("div", { className: `${itemClassName}`, onClick: toggleDropdown, children: type === 'context' ? (_jsx("div", { className: `${itemClassName}-button-decoration`, children: _jsx("img", { src: hamburgerIcon, alt: "" }) })) : (_jsxs(_Fragment, { children: [_jsx(Typography, { variant: "b1", weight: "regular", style: {
                                        color: disabled
                                            ? 'rgba(255, 255, 255, 0.2)'
                                            : 'var(--text-ui-text-secondary)',
                                        marginRight: '20px',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        maxWidth: '100%',
                                    }, children: disabled
                                        ? disabledText
                                            ? disabledText
                                            : options[selectedOptionIndex]
                                        : options[selectedOptionIndex] }), _jsx("img", { className: `${itemClassName}-triangle`, src: isOpen ? arrowUpSvg : arrowDownSvg, alt: "", style: { marginRight: '8px' } })] })) }), title && (_jsx(Typography, { variant: "label", weight: "regular", style: {
                            display: 'flex',
                            position: 'absolute',
                            top: '-8px',
                            left: '8px',
                            paddingLeft: '4px',
                            paddingRight: '4px',
                            backgroundColor: 'rgb(38,41,53)',
                            color: 'rgba(255, 255, 255, 0.4)',
                        }, children: title })), isOpen && (_jsxs("div", { className: `${defaultClassName}-list`, style: {
                            top: size === 'small' ? '40px' : '48px',
                            minWidth: type === 'context' ? '100px' : '100%',
                        }, children: [search && (_jsx("div", { className: "dropdown-search-container-wrapper", children: _jsxs("div", { className: "dropdown-search-container", children: [_jsx("img", { src: searchIcon, style: { marginLeft: '4px' }, alt: "" }), _jsx("input", { type: "text", placeholder: searchPlaceHolder, value: searchInput, onChange: (e) => onChangeSearchInput && onChangeSearchInput(e.target.value), style: {
                                                width: '100%',
                                                marginLeft: '-4px',
                                                color: 'rgba(255, 255, 255, 0.40))',
                                                fontSize: '14px',
                                                fontWeight: '400',
                                                padding: '4px',
                                                backgroundColor: 'transparent',
                                                borderRadius: '0px',
                                                borderWidth: '0px',
                                                outline: 'none',
                                            } })] }) })), _jsx("div", { className: `${defaultClassName}-list-wrapper`, children: filteredOptions && filteredOptions.length > 0 ? (filteredOptions.map((item, index) => (_jsxs("div", { className: `${defaultClassName}-list-item`, onClick: (e) => {
                                        e.stopPropagation();
                                        handleOptionClick(index);
                                    }, children: [_jsx(Typography, { variant: "b1", weight: "regular", style: {
                                                color: 'var(--text-ui-text-secondary)',
                                            }, children: item }), index === selectedOptionIndex && (_jsx("img", { className: "dropdown-check-icon", src: checkWhiteSvg, alt: "" }))] }, `${defaultClassName}-list-item-${item}__${index}`)))) : (_jsx("div", { style: {
                                        width: '100%',
                                        height: '20px',
                                        marginBottom: '8px',
                                        alignContent: 'center',
                                        paddingLeft: '12px',
                                    }, children: _jsx(Typography, { variant: "b1", weight: "regular", style: {
                                            paddingBottom: '4px',
                                            color: 'var(--text-ui-text-secondary)',
                                        }, children: "No Data" }) })) })] }))] }), type === 'default' && !isOpen && helperText && (_jsx(Typography, { variant: "label", weight: "regular", style: {
                    position: 'absolute',
                    top: size === 'small' ? '36px' : '44px',
                    color: isOpen
                        ? '#538BFF'
                        : isError
                            ? 'red'
                            : disabled
                                ? 'rgba(255, 255, 255, 0.2)'
                                : 'var(--text-ui-text-secondary)',
                    whiteSpace: 'nowrap',
                    marginLeft: '4px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: '100%',
                }, children: helperText }))] }));
};
export default Dropdown;
