import { FunctionComponent } from 'react';
export interface Props {
    type: 'switch' | 'favorite';
    value?: boolean;
    onChange?: () => void;
}
declare const Toggle: FunctionComponent<Props>;
export default Toggle;
