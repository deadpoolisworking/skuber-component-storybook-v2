import { jsx as _jsx } from "react/jsx-runtime";
import '../../index.css';
const InputTime = (props) => {
    const { time, readOnly, onChange } = props;
    const defaultClassName = 'component-input-time';
    const setFormat = (date) => {
        if (!date)
            return 'HH:mm';
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const timeString = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
        return timeString;
    };
    const handleChange = (e) => {
        const value = e.target.value;
        if (onChange) {
            const date = time ? time : new Date();
            onChange(new Date(date.getFullYear(), date.getMonth(), date.getDate(), parseInt(value.substring(0, 2)), parseInt(value.substring(3, 5)), 0));
        }
    };
    return (_jsx("form", { className: `${defaultClassName}`, children: _jsx("input", { readOnly: readOnly, type: "time", value: time ? setFormat(time) : '00:00', onChange: (e) => handleChange(e) }) }));
};
export default InputTime;
