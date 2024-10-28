import { v1ChartForm, v2ChartForm } from 'types';
import { FunctionComponent } from '../../../../node_modules/react';
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
declare const CustomAreaChart: FunctionComponent<Props>;
export default CustomAreaChart;
