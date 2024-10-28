import { jsx as _jsx } from "react/jsx-runtime";
import '../../index.css';
const InputDate = (props) => {
    const { date, min, readOnly, onChange } = props;
    const defaultClassName = 'component-input-date';
    const setFormat = (date) => {
        if (!date)
            return '0000-00-00';
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
    };
    const handleChange = (e) => {
        const value = e.target.value;
        const newDate = new Date(parseInt(value.substring(0, 4)), parseInt(value.substring(5, 7)) - 1, parseInt(value.substring(8, 10)));
        if (onChange) {
            onChange(newDate);
        }
    };
    return (_jsx("form", { className: `${defaultClassName}`, children: _jsx("input", { readOnly: readOnly, type: "date", value: date ? setFormat(date) : '0000-00-00', onChange: (e) => handleChange(e), min: min ? setFormat(min) : '' }) }));
};
export default InputDate;
