import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Button from '../Button';
import IconButton from '../IconButton';
import InputDate from '../InputDate';
import InputTime from '../InputTime';
import RangeCalender from '../RangeCalender';
import Typography from '../Typography';
import { closeIconSvg } from 'assets';
import '../../index.css';
const DateRangePicker = (props) => {
    const { from, to, onFromChange, onToChange, onSubmitClick, onCancelClick, onResetClick, } = props;
    const [fromDate, setFromDate] = useState(from);
    const [toDate, setToDate] = useState(to);
    const defaultClassName = 'component-date-range-picker';
    const handleResetClick = () => {
        setFromDate(from);
        setToDate(to);
        if (onResetClick) {
            setToDate(null);
            setFromDate(null);
            onResetClick();
        }
    };
    const onHandleFromChange = (data) => {
        setFromDate(data);
        setToDate(null);
        onFromChange?.(data);
    };
    const onHandleToChange = (data) => {
        if (fromDate && data && data < fromDate) {
            setToDate(fromDate);
        }
        else {
            setToDate(data);
        }
        onToChange?.(data);
    };
    const onHandleConfirm = () => {
        onSubmitClick && onSubmitClick({ start: fromDate, end: toDate });
    };
    return (_jsxs("div", { className: `${defaultClassName}`, children: [_jsxs("div", { className: `${defaultClassName}-header`, children: [_jsx(Typography, { variant: "s1", children: "Period" }), _jsx(IconButton, { icon: closeIconSvg, onClick: onCancelClick })] }), _jsx("div", { className: `${defaultClassName}-contents`, children: _jsxs("div", { className: `${defaultClassName}-contents-right`, children: [_jsxs("div", { className: `${defaultClassName}-contents-right-header`, children: [_jsxs("div", { className: `${defaultClassName}-contents-right-from`, children: [_jsx(Typography, { variant: "b1", weight: "semi-bold", style: { marginBottom: '16px' }, children: "From" }), _jsxs("div", { className: `${defaultClassName}-contents-right-from-date-time`, children: [_jsx(InputDate, { date: fromDate, onChange: onHandleFromChange }), _jsx(InputTime, { time: fromDate, onChange: onHandleFromChange })] })] }), _jsxs("div", { className: `${defaultClassName}-contents-right-to`, children: [_jsx(Typography, { variant: "b1", weight: "semi-bold", style: { marginBottom: '16px' }, children: "To" }), _jsxs("div", { className: `${defaultClassName}-contents-right-to-date-time`, children: [_jsx(InputDate, { date: toDate, min: fromDate, onChange: onHandleToChange }), _jsx(InputTime, { time: toDate, onChange: onHandleToChange })] })] })] }), _jsx(RangeCalender, { from: fromDate, to: toDate, onFromChange: onHandleFromChange, onToChange: onHandleToChange })] }) }), _jsxs("div", { className: `${defaultClassName}-footer`, children: [_jsx(Button, { variant: "outlined", onClick: handleResetClick, children: "Reset" }), _jsxs("div", { className: `${defaultClassName}-footer-right`, children: [_jsx(Button, { variant: "outlined", style: { marginRight: '8px' }, onClick: onCancelClick, children: "Cancel" }), _jsx(Button, { variant: "contained", onClick: onHandleConfirm, children: "Complete" })] })] })] }));
};
export default DateRangePicker;
