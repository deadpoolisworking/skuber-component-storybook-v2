import '../../../index.css';
// import './style.css';
import { FunctionComponent } from 'react';
import Typography from '../../Typography';
import Spinner from '../../Spinner';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';
import { v1v2ChartForm } from 'types';

interface LineChartProps {
  chartName: string;
  titles?: string[];
  values: any[];
  width?: number;
  height: number;
  data: v1v2ChartForm[];
  loading?: boolean;
  style?: React.CSSProperties;
}

const CustomLineChart: FunctionComponent<LineChartProps> = (
  props: LineChartProps,
) => {
  const {
    chartName,
    titles,
    values,
    data,
    width = 360,
    height = 64,
    loading,
    style,
  } = props;

  return (
    <div className="line-chart-container" style={{ ...style }}>
      <Typography
        variant="label"
        weight="medium"
        style={{ color: 'rgba(255, 255, 255, 0.4)' }}
      >
        {chartName}
      </Typography>
      <div className="line-chart-title-container">
        <div className="line-chart-title-wrapper">
          <div className="line-chart-title-line" />
          <Typography
            variant="label"
            weight="medium"
            style={{
              color: 'rgba(255, 255, 255, 0.4)',
              marginRight: '8px',
            }}
          >
            {titles && titles[0]}
          </Typography>
          <Typography
            variant="b1"
            weight="regular"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            {data && data.length < 2 ? 0 : values[0]}
          </Typography>
        </div>
        <div className="line-chart-title-wrapper">
          <div
            className="line-chart-title-line"
            style={{ borderTop: '2px solid #538BFF' }}
          />
          <Typography
            variant="label"
            weight="medium"
            style={{
              color: 'rgba(255, 255, 255, 0.4)',
              marginRight: '8px',
            }}
          >
            {titles && titles[1]}
          </Typography>
          <Typography
            variant="b1"
            weight="regular"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            {data && data.length < 2 ? 0 : values[1]}
          </Typography>
        </div>
      </div>
      <div className="line-chart-body" style={{ width, height }}>
        {loading ? (
          <Spinner style={{ width: '40px', height: '40px' }} />
        ) : (
          <ResponsiveContainer>
            <AreaChart
              width={width}
              height={height}
              data={data}
              margin={{
                top: 20,
                right: 0,
                left: 0,
                bottom: 1,
              }}
            >
              <Area
                isAnimationActive={false}
                type="natural"
                dataKey="v1"
                stroke="#538BFF"
                fillOpacity={1}
                fill="rgba(83, 139, 255, 0.2)"
              />
              <Area
                isAnimationActive={false}
                type="natural"
                dataKey="v2"
                stroke="rgba(255, 255, 255, 0.7)"
                fillOpacity={1}
                fill="rgba(255, 255, 255, 0.08)"
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default CustomLineChart;
