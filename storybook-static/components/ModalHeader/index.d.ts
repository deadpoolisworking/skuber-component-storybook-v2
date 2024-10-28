import { FunctionComponent } from '../../../node_modules/react';
interface ModalHeaderProps {
    title: string;
    children?: any;
    leftDecoration?: any;
    style?: any;
    onClose?: () => void;
}
declare const ModalHeader: FunctionComponent<ModalHeaderProps>;
export default ModalHeader;
