import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../../../index.css';
// import './style.css';
import Typography from '../../Typography';
const HorizontalBar = (props) => {
    const { value, style } = props;
    return (_jsxs("div", { className: "horizontal-bar-container", style: style, children: [_jsx("div", { className: "horizontal-bar-progress", children: _jsx("div", { style: {
                        width: `${value >= 100 ? 240 : 240 * (value / 100)}px`,
                        height: '16px',
                        backgroundColor: value > 50
                            ? 'var(--status-ui-status-warning)'
                            : 'var(--status-good-lightgreen)',
                        borderRadius: '4px',
                    } }) }), _jsx("div", { children: _jsxs(Typography, { style: {
                        color: value > 50
                            ? 'var(--status-ui-status-warning)'
                            : 'var(--status-good-lightgreen)',
                    }, children: [value.toFixed(2), "%"] }) })] }));
};
export default HorizontalBar;
