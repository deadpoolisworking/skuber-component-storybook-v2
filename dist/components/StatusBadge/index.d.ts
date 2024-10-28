import { FunctionComponent } from 'react';
export interface Props {
    status: 'good' | 'neutral' | 'bad' | 'etc';
    children?: any;
    isLoading?: boolean;
}
declare const StatusBadge: FunctionComponent<Props>;
export default StatusBadge;
