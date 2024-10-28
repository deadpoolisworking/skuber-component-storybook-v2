import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styled from '@emotion/styled';
import '../../../index.css';
// import './style.css';
import Spinner from 'components/Spinner';
const AnimatedCircle = styled.circle `
  // animation: circle-fill-animation 1.2s ease;

  // @keyframes circle-fill-animation {
  //   0% {
  //     stroke-dasharray: 0 ${2 * Math.PI * 90};
  //   }
  // }
`;
const SingleDonutChart = (props) => {
    const { percentage, capacity, loading = false } = props;
    const value = Number(percentage);
    const size = 90;
    const strokewidth = 4;
    const halfSize = size * 0.5;
    const radius = halfSize - strokewidth * 0.5;
    const circumference = 2 * Math.PI * radius;
    const strokeValue = (value * circumference) / 100;
    const dashValue = strokeValue + ' ' + circumference;
    const trackStyle = { strokeWidth: strokewidth };
    const indicatorStyle = {
        strokeWidth: strokewidth,
        strokeDasharray: dashValue,
    };
    const rotateValue = 'rotate(-90 ' + halfSize + ',' + halfSize + ')';
    return (_jsx(_Fragment, { children: loading ? (_jsx(Spinner, { style: { width: '44px', height: '44px' } })) : (_jsxs("svg", { width: size, height: size, className: "innerContainer", children: [_jsx(AnimatedCircle, { r: radius, cx: halfSize, cy: halfSize, transform: rotateValue, style: trackStyle, className: "circleOut" }), _jsx(AnimatedCircle, { r: radius, cx: halfSize, cy: halfSize, transform: rotateValue, style: indicatorStyle, className: Number(percentage) <= 70
                        ? 'circleInnerGreen'
                        : 'circleInnerYellow' }), _jsx("text", { className: Number(percentage) <= 70
                        ? 'innerGreenContainer'
                        : 'innerYellowContainer', x: 47, y: 43, style: {
                        fontSize: '14px',
                        fontWeight: '700',
                        fontFamily: 'Pretendard',
                        textAnchor: 'middle',
                    }, children: `${percentage ? percentage : 0}%` }), _jsx("text", { className: Number(percentage) <= 70
                        ? 'innerGreenContainer'
                        : 'innerYellowContainer', x: 45, y: 59, style: {
                        fontSize: '12px',
                        fontWeight: '400',
                        fontFamily: 'Pretendard',
                        fill: ' rgba(255, 255, 255, 0.4)',
                        textAnchor: 'middle',
                    }, children: capacity ? capacity : '-' })] })) }));
};
export default SingleDonutChart;
