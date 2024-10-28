import { FunctionComponent } from '../../../node_modules/react';
/**
 * displayFlex 옵션을 키면 가로 정렬이 된다
 */
export interface Props {
    list: {
        key: string;
        label: string;
    }[];
    groupName: string;
    displayRow?: boolean;
    defaultValue?: number;
    onClick?: (index: number) => void;
    disabled?: boolean;
    isSecurity?: boolean;
}
declare const RadioGroup: FunctionComponent<Props>;
export default RadioGroup;
