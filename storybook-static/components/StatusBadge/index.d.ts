import { FunctionComponent } from '../../../node_modules/react';
export interface Props {
    status: 'good' | 'neutral' | 'bad' | 'etc';
    children?: any;
    isLoading?: boolean;
}
declare const StatusBadge: FunctionComponent<Props>;
export default StatusBadge;
