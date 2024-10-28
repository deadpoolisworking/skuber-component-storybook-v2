import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// import './style.css';
import '../../../index.css';
import Typography from '../../Typography';
import Spinner from '../../Spinner';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';
const CHART_WIDTH = 360;
const CHART_HEIGHT = 64;
const CustomAreaChart = (props) => {
    const { style, mode = 'light', title, subTitle, data, width = 170, height = 48, loading, } = props;
    const v1DefaultArr = [
        { timestamp: 0, v1: 0 },
        { timestamp: 0, v1: 0 },
        { timestamp: 0, v1: 0 },
    ];
    const v2DefaultArr = [
        { timestamp: 0, v2: 0 },
        { timestamp: 0, v2: 0 },
        { timestamp: 0, v2: 0 },
    ];
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "custom-area-chart-container", style: style, children: [title && (_jsx(Typography, { variant: "label", weight: "medium", style: { color: 'rgba(255, 255, 255, 0.4)' }, children: title })), subTitle && (_jsx("div", { className: "custom-area-chart-title-container", children: _jsx(Typography, { variant: "b1", weight: "regular", style: { color: 'rgba(255, 255, 255, 0.9)' }, children: loading ? '-' : subTitle ? subTitle : 0 }) })), _jsx("div", { className: "custom-area-chart-body", style: {
                        width: width ? `${width}px` : '140px',
                        height: height ? `${height}px` : '64px',
                    }, children: loading ? (_jsx("div", { style: {
                            display: 'flex',
                            width: width ? `${width}px` : '140px',
                            height: '100%',
                        }, children: _jsx(Spinner, { style: { width: '40px', height: '40px' } }) })) : data && data.length > 1 ? (_jsx(ResponsiveContainer, { children: _jsx(AreaChart, { width: CHART_WIDTH, height: CHART_HEIGHT, data: data, margin: {
                                top: 20,
                                right: 0,
                                left: 0,
                                bottom: 1,
                            }, children: mode === 'light' ? (_jsxs(_Fragment, { children: [_jsx("defs", { children: _jsxs("linearGradient", { id: "v1", x1: "0", y1: "0", x2: "0", y2: "1", children: [_jsx("stop", { offset: "5%", stopColor: "#FDA701", stopOpacity: 0.9 }), _jsx("stop", { offset: "95%", stopColor: "#00C02A", stopOpacity: 11 })] }) }), _jsx(Area, { type: "natural", isAnimationActive: false, dataKey: "v1", stroke: "rgba(255, 255, 255, 0.4)", strokeWidth: 2, fillOpacity: 1, fill: "url(#v1)" })] })) : (_jsxs(_Fragment, { children: [_jsx("defs", { children: _jsxs("linearGradient", { id: "v2", x1: "0", y1: "0", x2: "0", y2: "1", children: [_jsx("stop", { offset: "5%", stopColor: "#EB4E87", stopOpacity: 0.9 }), _jsx("stop", { offset: "95%", stopColor: "#125AED", stopOpacity: 11 })] }) }), _jsx(Area, { type: "natural", isAnimationActive: false, dataKey: "v2", stroke: "rgba(255, 255, 255, 0.4)", strokeWidth: 2, fillOpacity: 1, fill: "url(#v2)" })] })) }) })) : (
                    // <Spinner style={{ width: `${40}px`, height: '40px' }} />
                    _jsx(ResponsiveContainer, { children: _jsx(AreaChart, { width: CHART_WIDTH, height: CHART_HEIGHT, data: mode === 'light' ? v1DefaultArr : v2DefaultArr, margin: {
                                top: 20,
                                right: 0,
                                left: 0,
                                bottom: 1,
                            } }) })) })] }) }));
};
export default CustomAreaChart;
