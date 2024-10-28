import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import '../../index.css';
// import './style.css';
import Button from '../Button';
import Typography from '../Typography';
const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const Calender = ({ selectedDate, onDateClick }) => {
    const [selected, setSelected] = useState(selectedDate ? selectedDate.getDate() : -1);
    const [hover, setHover] = useState(-1);
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const defaultClassName = 'component-calender';
    useEffect(() => {
        if (selectedDate)
            setSelected(selectedDate.getDate());
    }, [selectedDate]);
    const handleDateClick = (date) => {
        const newSelectedDate = new Date(currentYear, currentMonth, date);
        setSelected(date);
        if (onDateClick)
            onDateClick(newSelectedDate);
    };
    const getEmptyDateButton = () => {
        return _jsx("div", {});
    };
    const getDateButton = (date) => {
        const itemClassName = `${defaultClassName}-body-dates-item`;
        const selectedClassName = `${itemClassName}-${selected === date ? 'selected' : 'unselected'}`;
        const hoverClassName = `${itemClassName}-${hover === date ? 'focused' : 'unfocused'}`;
        return (_jsx("div", { className: `${itemClassName} ${selectedClassName} ${hoverClassName}`, onClick: () => handleDateClick(date), onMouseEnter: () => setHover(date), onMouseLeave: () => setHover(-1), children: _jsx(Typography, { variant: "b1", weight: "regular", children: date }) }, date));
    };
    const getDateList = () => {
        const firstDay = new Date(currentYear, currentMonth, 1);
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        const list = [];
        const offset = firstDay.getDay();
        for (let i = 0; i < offset; ++i) {
            list.push(getEmptyDateButton());
        }
        for (let i = 1; i <= lastDay.getDate(); ++i) {
            list.push(getDateButton(i));
        }
        return list;
    };
    return (_jsxs("div", { className: `${defaultClassName}`, children: [_jsxs("div", { className: `${defaultClassName}-head`, children: [_jsx(Button, { variant: "text", style: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '40px',
                            height: '40px',
                            minWidth: '0px',
                            padding: '0px',
                        }, children: '<' }), _jsx(Typography, { variant: "s1", style: {
                            width: '216px',
                            height: '19px',
                            textAlign: 'center',
                        }, children: `${new Date(currentYear, currentMonth).toLocaleString('default', {
                            month: 'long',
                        })} ${currentYear}` }), _jsx(Button, { variant: "text", style: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '40px',
                            height: '40px',
                            minWidth: '0px',
                            padding: '0px',
                        }, children: '>' })] }), _jsxs("div", { className: `${defaultClassName}-body`, children: [_jsx("div", { className: `${defaultClassName}-body-days`, children: days.map((day, index) => (_jsx(Typography, { variant: "b1", weight: "medium", style: { color: 'var(--text-tertiary)' }, children: day }, `${defaultClassName}-body-days-${day}__${index}`))) }), _jsx("div", { className: `${defaultClassName}-body-dates`, children: getDateList() })] })] }));
};
export default Calender;
