import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../../../index.css';
import Typography from '../../Typography';
import Spinner from '../../Spinner';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';
const CustomLineChart = (props) => {
    const { chartName, titles, values, data, width = 360, height = 64, loading, style, } = props;
    return (_jsxs("div", { className: "line-chart-container", style: { ...style }, children: [_jsx(Typography, { variant: "label", weight: "medium", style: { color: 'rgba(255, 255, 255, 0.4)' }, children: chartName }), _jsxs("div", { className: "line-chart-title-container", children: [_jsxs("div", { className: "line-chart-title-wrapper", children: [_jsx("div", { className: "line-chart-title-line" }), _jsx(Typography, { variant: "label", weight: "medium", style: {
                                    color: 'rgba(255, 255, 255, 0.4)',
                                    marginRight: '8px',
                                }, children: titles && titles[0] }), _jsx(Typography, { variant: "b1", weight: "regular", style: { color: 'rgba(255, 255, 255, 0.9)' }, children: data && data.length < 2 ? 0 : values[0] })] }), _jsxs("div", { className: "line-chart-title-wrapper", children: [_jsx("div", { className: "line-chart-title-line", style: { borderTop: '2px solid #538BFF' } }), _jsx(Typography, { variant: "label", weight: "medium", style: {
                                    color: 'rgba(255, 255, 255, 0.4)',
                                    marginRight: '8px',
                                }, children: titles && titles[1] }), _jsx(Typography, { variant: "b1", weight: "regular", style: { color: 'rgba(255, 255, 255, 0.9)' }, children: data && data.length < 2 ? 0 : values[1] })] })] }), _jsx("div", { className: "line-chart-body", style: { width, height }, children: loading ? (_jsx(Spinner, { style: { width: '40px', height: '40px' } })) : (_jsx(ResponsiveContainer, { children: _jsxs(AreaChart, { width: width, height: height, data: data, margin: {
                            top: 20,
                            right: 0,
                            left: 0,
                            bottom: 1,
                        }, children: [_jsx(Area, { isAnimationActive: false, type: "natural", dataKey: "v1", stroke: "#538BFF", fillOpacity: 1, fill: "rgba(83, 139, 255, 0.2)" }), _jsx(Area, { isAnimationActive: false, type: "natural", dataKey: "v2", stroke: "rgba(255, 255, 255, 0.7)", fillOpacity: 1, fill: "rgba(255, 255, 255, 0.08)" })] }) })) })] }));
};
export default CustomLineChart;
