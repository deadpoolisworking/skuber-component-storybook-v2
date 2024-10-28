// import './style.css';
import '../../../index.css';
import { v1ChartForm, v2ChartForm } from 'types';
import { FunctionComponent } from 'react';
import Typography from '../../Typography';
import Spinner from '../../Spinner';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

interface Props {
  mode: 'dark' | 'light';
  title?: string;
  subTitle?: string;
  data: v1ChartForm[] | v2ChartForm[];
  width?: number;
  height?: number;
  loading?: boolean;
  style?: React.CSSProperties;
}

const CHART_WIDTH = 360;
const CHART_HEIGHT = 64;
const CustomAreaChart: FunctionComponent<Props> = (props: Props) => {
  const {
    style,
    mode = 'light',
    title,
    subTitle,
    data,
    width = 170,
    height = 48,
    loading,
  } = props;

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

  return (
    <>
      <div className="custom-area-chart-container" style={style}>
        {title && (
          <Typography
            variant="label"
            weight="medium"
            style={{ color: 'rgba(255, 255, 255, 0.4)' }}
          >
            {title}
          </Typography>
        )}
        {subTitle && (
          <div className="custom-area-chart-title-container">
            <Typography
              variant="b1"
              weight="regular"
              style={{ color: 'rgba(255, 255, 255, 0.9)' }}
            >
              {loading ? '-' : subTitle ? subTitle : 0}
            </Typography>
          </div>
        )}
        <div
          className="custom-area-chart-body"
          style={{
            width: width ? `${width}px` : '140px',
            height: height ? `${height}px` : '64px',
          }}
        >
          {loading ? (
            <div
              style={{
                display: 'flex',
                width: width ? `${width}px` : '140px',
                height: '100%',
              }}
            >
              <Spinner style={{ width: '40px', height: '40px' }} />
            </div>
          ) : data && data.length > 1 ? (
            <ResponsiveContainer>
              <AreaChart
                width={CHART_WIDTH}
                height={CHART_HEIGHT}
                data={data}
                margin={{
                  top: 20,
                  right: 0,
                  left: 0,
                  bottom: 1,
                }}
              >
                {mode === 'light' ? (
                  <>
                    <defs>
                      <linearGradient id="v1" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#FDA701"
                          stopOpacity={0.9}
                        />
                        <stop
                          offset="95%"
                          stopColor="#00C02A"
                          stopOpacity={11}
                        />
                      </linearGradient>
                    </defs>
                    <Area
                      type="natural"
                      isAnimationActive={false}
                      dataKey="v1"
                      stroke="rgba(255, 255, 255, 0.4)"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#v1)"
                    />
                  </>
                ) : (
                  <>
                    <defs>
                      <linearGradient id="v2" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#EB4E87"
                          stopOpacity={0.9}
                        />
                        <stop
                          offset="95%"
                          stopColor="#125AED"
                          stopOpacity={11}
                        />
                      </linearGradient>
                    </defs>
                    <Area
                      type="natural"
                      isAnimationActive={false}
                      dataKey="v2"
                      stroke="rgba(255, 255, 255, 0.4)"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#v2)"
                    />
                  </>
                )}
              </AreaChart>
            </ResponsiveContainer>
          ) : (
            // <Spinner style={{ width: `${40}px`, height: '40px' }} />
            <ResponsiveContainer>
              <AreaChart
                width={CHART_WIDTH}
                height={CHART_HEIGHT}
                data={mode === 'light' ? v1DefaultArr : v2DefaultArr}
                margin={{
                  top: 20,
                  right: 0,
                  left: 0,
                  bottom: 1,
                }}
              ></AreaChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </>
  );
};

export default CustomAreaChart;
