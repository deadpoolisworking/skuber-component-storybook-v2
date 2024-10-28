import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Typography from '../Typography';
import Spinner from '../Spinner';
import '../../index.css';
const StatusBadge = (props) => {
    const { status, children, isLoading = false } = props;
    const defaultClassName = 'status-badge';
    const statusClassName = `status-badge-${status}`;
    const textColor = status === 'good'
        ? '#00c02a'
        : status === 'neutral'
            ? '#538bff'
            : status === 'bad'
                ? '#ffa800'
                : 'rgba(255, 255, 255, 0.4)';
    return (_jsxs("div", { className: `${defaultClassName} ${statusClassName}`, children: [_jsx(Typography, { variant: "b1", weight: "regular", style: {
                    color: textColor,
                    alignSelf: 'center',
                }, children: children }), isLoading && (_jsx(Spinner, { style: {
                    width: '30px',
                    height: '36px',
                } }))] }));
};
export default StatusBadge;
