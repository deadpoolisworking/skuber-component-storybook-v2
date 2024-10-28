import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import '../../../index.css';
// import './style.css';
import Spinner from 'components/Spinner';

interface Props {
  percentage?: string;
  capacity?: string;
  loading?: boolean;
}

const AnimatedCircle = styled.circle`
  // animation: circle-fill-animation 1.2s ease;

  // @keyframes circle-fill-animation {
  //   0% {
  //     stroke-dasharray: 0 ${2 * Math.PI * 90};
  //   }
  // }
`;

const SingleDonutChart: FunctionComponent<Props> = (props: Props) => {
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

  return (
    <>
      {loading ? (
        <Spinner style={{ width: '44px', height: '44px' }} />
      ) : (
        <svg width={size} height={size} className="innerContainer">
          <AnimatedCircle
            r={radius}
            cx={halfSize}
            cy={halfSize}
            transform={rotateValue}
            style={trackStyle}
            className="circleOut"
          />
          <AnimatedCircle
            r={radius}
            cx={halfSize}
            cy={halfSize}
            transform={rotateValue}
            style={indicatorStyle}
            className={
              Number(percentage) <= 70
                ? 'circleInnerGreen'
                : 'circleInnerYellow'
            }
          />
          <text
            className={
              Number(percentage) <= 70
                ? 'innerGreenContainer'
                : 'innerYellowContainer'
            }
            x={47}
            y={43}
            style={{
              fontSize: '14px',
              fontWeight: '700',
              fontFamily: 'Pretendard',
              textAnchor: 'middle',
            }}
          >
            {`${percentage ? percentage : 0}%`}
          </text>
          <text
            className={
              Number(percentage) <= 70
                ? 'innerGreenContainer'
                : 'innerYellowContainer'
            }
            x={45}
            y={59}
            style={{
              fontSize: '12px',
              fontWeight: '400',
              fontFamily: 'Pretendard',
              fill: ' rgba(255, 255, 255, 0.4)',
              textAnchor: 'middle',
            }}
          >
            {capacity ? capacity : '-'}
          </text>
        </svg>
      )}
    </>
  );
};

export default SingleDonutChart;
