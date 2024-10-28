import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Typography from '../../Typography';
// import './style.css';
import '../../../index.css';
const AreaChart = (props) => {
    const { dataPoints, capacity, unit = '', fill, width = 140, height = 36, style, } = props;
    const getSvgPoints = () => {
        const s = [...dataPoints];
        s.sort((a, b) => a.y - b.y);
        const n = dataPoints.map((data, index) => {
            return {
                x: index * 10,
                y: height - (data.y / height) * 100,
            };
        });
        return n;
    };
    const getOpposedLine = (prev, next) => {
        const xLength = next.x - prev.x;
        const yLength = next.y - prev.y;
        const length = Math.sqrt(xLength * xLength + yLength * yLength);
        const angle = Math.atan2(yLength, xLength);
        return {
            length,
            angle,
        };
    };
    const getControlPoint = (prev, curr, next, isEnd) => {
        const p = prev || curr;
        const n = next || curr;
        const smoothDegree = 0.25;
        const opposedLine = getOpposedLine(p, n);
        const angle = opposedLine.angle + (isEnd ? Math.PI : 0);
        const length = opposedLine.length * smoothDegree;
        const coord = {
            x: curr.x + Math.cos(angle) * length,
            y: curr.y + Math.sin(angle) * length,
        };
        return coord;
    };
    const getCurve = () => {
        const n = getSvgPoints();
        const pathString = n.map((data, index, arr) => {
            if (index === 0)
                return `M 0,${data.y}`;
            const cps = getControlPoint(arr[index - 2], arr[index - 1], data);
            const cpe = getControlPoint(arr[index - 1], data, arr[index + 1], true);
            return `C${cps.x},${cps.y} ${cpe.x},${cpe.y} ${data.x},${data.y}`;
        });
        pathString.push(`L${width},${height} L0,${height}z`);
        const str = pathString.join(' ');
        return (_jsx("path", { d: str, fill: fill ? fill : 'var(--status-good-lightgreen)', stroke: fill ? fill : 'var(--status-good-lightgreen)', strokeWidth: 1, strokeLinejoin: "round" }));
    };
    return (_jsxs("div", { className: "component-area-chart", style: { ...style }, children: [_jsxs("svg", { className: "component-area-chart-container", rx: 8, ry: 8, width: width, height: height, children: [_jsx("rect", { className: "component-area-chart-background", x: 0, y: 0, width: width, height: height }), getCurve()] }), _jsx(Typography, { variant: "label", weight: "regular", style: { color: 'var(--text-tertiary)' }, children: `${capacity}${unit}` })] }));
};
export default AreaChart;
