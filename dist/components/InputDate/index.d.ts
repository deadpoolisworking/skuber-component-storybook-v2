import { FunctionComponent } from 'react';
export interface Props {
    date?: Date | null;
    min?: Date | null;
    readOnly?: boolean;
    onChange?: (date: Date | null) => void;
}
declare const InputDate: FunctionComponent<Props>;
export default InputDate;
