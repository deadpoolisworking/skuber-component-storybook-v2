import { FunctionComponent } from 'react';
interface Props {
    label?: string;
    selected?: boolean;
    hasDelete?: boolean;
    hasIcon?: boolean;
    onChange?: (selected: boolean) => void;
    deletedTapped?: (label: string) => void;
}
declare const Chip: FunctionComponent<Props>;
export default Chip;
