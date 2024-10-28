import { FunctionComponent } from '../../../node_modules/react';
export interface Props {
    from?: Date | null | undefined;
    to?: Date | null | undefined;
    onFromChange?: (date: Date | null) => void;
    onToChange?: (date: Date | null) => void;
}
declare const RangeCalender: FunctionComponent<Props>;
export default RangeCalender;
