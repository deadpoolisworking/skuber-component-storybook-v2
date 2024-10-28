import { FunctionComponent } from '../../../node_modules/react';
export interface Props {
    from: Date | null | undefined;
    to: Date | null | undefined;
    onFromChange: (date: Date | null) => void;
    onToChange: (date: Date | null) => void;
    onSubmitClick?: (data: {
        start: any;
        end: any;
    }) => void;
    onCancelClick?: () => void;
    onResetClick?: () => void;
}
declare const DateRangePicker: FunctionComponent<Props>;
export default DateRangePicker;
