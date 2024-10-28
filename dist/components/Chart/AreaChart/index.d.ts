import { FunctionComponent } from 'react';
import { Coord } from 'types';
interface Props {
    dataPoints: Coord[];
    capacity?: string;
    unit?: string;
    fill?: string;
    width?: number;
    height: number;
    style?: React.CSSProperties;
}
declare const AreaChart: FunctionComponent<Props>;
export default AreaChart;
