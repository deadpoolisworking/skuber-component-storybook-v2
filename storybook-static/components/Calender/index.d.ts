import { FunctionComponent } from '../../../node_modules/react';
export interface Props {
    selectedDate?: Date;
    onDateClick?: (date: Date) => void;
}
declare const Calender: FunctionComponent<Props>;
export default Calender;
