import { FunctionComponent } from 'react';
export interface Props {
    time?: Date | null;
    readOnly?: boolean;
    onChange?: (date: Date | null) => void;
}
declare const InputTime: FunctionComponent<Props>;
export default InputTime;
