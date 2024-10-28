import { FunctionComponent } from 'react';
interface ModalFooterProps {
    loading?: boolean;
    hideOption?: boolean;
    hideOptionText?: string;
    leftButtonTitle?: string;
    cancelButtonTitle?: string;
    confirmButtonTitle?: string;
    isConfirmButtonDisabled?: boolean;
    style?: React.CSSProperties;
    onClose: () => void;
    onConfirm: (option: boolean) => void;
    onClickLeftButton?: () => void;
}
declare const ModalFooter: FunctionComponent<ModalFooterProps>;
export default ModalFooter;
