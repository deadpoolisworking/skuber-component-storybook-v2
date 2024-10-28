import { FunctionComponent } from '../../../../node_modules/react';
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
declare const CustomLineChart: FunctionComponent<LineChartProps>;
export default CustomLineChart;
