import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../../index.css';
// import './style.css';
import { useEffect, useState } from 'react';
import IconButton from '../IconButton';
import Typography from '../Typography';
import { arrowBackSvg, arrowNextSvg } from 'assets';
const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const today = new Date();
const RangeCalender = (props) => {
    const { from, to, onFromChange, onToChange } = props;
    const [fromDate, setFromDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
    const [toDate, setToDate] = useState(new Date(today.getFullYear(), today.getMonth() + 2, 0));
    const [selectedFromDate, setSelectedFromDate] = useState(from ? from : null);
    const [selectedToDate, setSelectedToDate] = useState(to ? to : null);
    const defaultClassName = 'component-range-calender';
    const movePrevMonth = (date, flag) => {
        const newYear = date.getFullYear();
        const newMonth = date.getMonth() - (flag === 'from' ? 1 : 0);
        const newDate = flag === 'from' ? 1 : 0;
        if (flag === 'from')
            setFromDate(new Date(newYear, newMonth, newDate));
        else
            setToDate(new Date(newYear, newMonth, newDate));
    };
    const moveNextMonth = (date, flag) => {
        const newYear = date.getFullYear();
        const newMonth = date.getMonth() + (flag === 'from' ? 1 : 2);
        const newDate = flag === 'from' ? 1 : 0;
        if (flag === 'from')
            setFromDate(new Date(newYear, newMonth, newDate));
        else
            setToDate(new Date(newYear, newMonth, newDate));
    };
    const getEmptyDateButton = () => {
        const crypto = window.crypto;
        const array = new Uint32Array(1);
        crypto.getRandomValues(array);
        return _jsx("div", {}, array[0].toString(10));
    };
    const getDateButton = (date) => {
        const from = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
        const to = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);
        const itemClassName = `${defaultClassName}-body-dates-item`;
        const selectedClassName = `${itemClassName}-${selectedFromDate?.valueOf() === from.valueOf() ||
            (selectedToDate &&
                selectedToDate.valueOf() >= from.valueOf() &&
                selectedToDate.valueOf() <= to.valueOf())
            ? 'selected'
            : 'unselected'}`;
        const rangedClassName = `${itemClassName}-${selectedFromDate &&
            selectedToDate &&
            from.valueOf() > selectedFromDate.valueOf() &&
            to.valueOf() < selectedToDate.valueOf()
            ? 'ranged'
            : 'unranged'}`;
        const borderClassName = `${itemClassName}${date.valueOf() === selectedFromDate?.valueOf() ? '-from' : ''}${to.valueOf() === selectedToDate?.valueOf() ||
            date.valueOf() === selectedToDate?.valueOf()
            ? '-to'
            : ''}`;
        const handleSelectedFromDate = (date) => {
            setSelectedFromDate(date);
            if (onFromChange)
                onFromChange(date);
        };
        const handleSelectedToDate = (date) => {
            setSelectedToDate(date);
            if (onToChange)
                onToChange(date);
        };
        const handleClick = () => {
            if (!selectedFromDate) {
                handleSelectedFromDate(from);
            }
            else if (!selectedToDate) {
                if (selectedFromDate.valueOf() < date.valueOf()) {
                    handleSelectedToDate(to);
                }
                else {
                    const newFrom = new Date(selectedFromDate.getFullYear(), selectedFromDate.getMonth(), selectedFromDate.getDate(), 23, 59, 59);
                    handleSelectedToDate(newFrom);
                    handleSelectedFromDate(from);
                }
            }
            else {
                handleSelectedFromDate(from);
                handleSelectedToDate(null);
            }
        };
        return (_jsx("div", { className: `${itemClassName} ${selectedClassName} ${rangedClassName} ${borderClassName}`, onClick: () => handleClick(), children: _jsx(Typography, { variant: "b1", weight: "regular", style: {
                    color: rangedClassName.includes('unranged')
                        ? 'var(--text-ui-text-secondary)'
                        : 'var(--interation-ui-interation-primary-contrast)',
                }, children: date.getDate().toString() }) }, date.valueOf()));
    };
    const getDateList = (date) => {
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        const list = [];
        const offset = firstDay.getDay();
        for (let i = 0; i < offset; ++i) {
            list.push(getEmptyDateButton());
        }
        for (let i = 1; i <= lastDay.getDate(); ++i) {
            const current = new Date(firstDay.getFullYear(), firstDay.getMonth(), i);
            list.push(getDateButton(current));
        }
        return list;
    };
    useEffect(() => {
        setSelectedFromDate(from ? from : null);
        setSelectedToDate(to ? to : null);
    }, [from, to]);
    return (_jsxs("div", { className: `${defaultClassName}-container`, children: [_jsxs("div", { className: `${defaultClassName}`, style: { marginRight: '20px' }, children: [_jsxs("div", { className: `${defaultClassName}-head ${defaultClassName}-head-from`, children: [_jsx(IconButton, { icon: arrowBackSvg, onClick: () => movePrevMonth(fromDate, 'from'), style: {
                                    width: '32px',
                                    height: '32px',
                                } }), _jsx(Typography, { variant: "s1", style: {
                                    width: '216px',
                                    height: '19px',
                                    textAlign: 'center',
                                }, children: `${fromDate.getMonth() + 1} ${fromDate.getFullYear()}` }), !(fromDate.getFullYear() === today.getFullYear() &&
                                fromDate.getMonth() === today.getMonth()) && (_jsx(IconButton, { icon: arrowNextSvg, onClick: () => moveNextMonth(fromDate, 'from'), style: {
                                    width: '32px',
                                    height: '32px',
                                } }))] }), _jsxs("div", { className: `${defaultClassName}-body`, children: [_jsx("div", { className: `${defaultClassName}-body-days`, children: days.map((day, index) => (_jsx(Typography, { variant: "b1", weight: "medium", style: { color: 'var(--text-tertiary)' }, children: day }, `${defaultClassName}-body-days-${day}__${index}`))) }), _jsx("div", { className: `${defaultClassName}-body-dates`, children: getDateList(fromDate) })] })] }), _jsxs("div", { className: `${defaultClassName}`, children: [_jsxs("div", { className: `${defaultClassName}-head ${defaultClassName}-head-to`, children: [!(toDate.getFullYear() === today.getFullYear() &&
                                toDate.getMonth() === today.getMonth() + 1) && (_jsx(IconButton, { icon: arrowBackSvg, onClick: () => movePrevMonth(toDate, 'to'), style: {
                                    width: '32px',
                                    height: '32px',
                                } })), _jsx(Typography, { variant: "s1", style: {
                                    width: '216px',
                                    height: '19px',
                                    textAlign: 'center',
                                }, children: `${toDate.getMonth() + 1} ${toDate.getFullYear()}` }), _jsx(IconButton, { icon: arrowNextSvg, onClick: () => moveNextMonth(toDate, 'to'), style: {
                                    width: '32px',
                                    height: '32px',
                                } })] }), _jsxs("div", { className: `${defaultClassName}-body`, children: [_jsx("div", { className: `${defaultClassName}-body-days`, children: days.map((day, index) => (_jsx(Typography, { variant: "b1", weight: "medium", style: { color: 'var(--text-tertiary)' }, children: day }, `${defaultClassName}-body-days-${day}__${index}`))) }), _jsx("div", { className: `${defaultClassName}-body-dates`, children: getDateList(toDate) })] })] })] }));
};
export default RangeCalender;
