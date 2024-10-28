import '../../index.css';
// import './style.css';
import { FunctionComponent, useState } from 'react';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Spinner from '../Spinner';
import Typography from '../Typography';

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

const ModalFooter: FunctionComponent<ModalFooterProps> = (
  props: ModalFooterProps,
) => {
  const {
    loading,
    hideOption,
    hideOptionText,
    leftButtonTitle,
    cancelButtonTitle,
    confirmButtonTitle,
    isConfirmButtonDisabled,
    style,
    onClose,
    onConfirm,
    onClickLeftButton,
  } = props;
  const [checked, setChecked] = useState<boolean>(false);

  const onHandleOption = () => setChecked(!checked);
  const onHandleConfirm = () => onConfirm(checked);

  return (
    <div className="modal-footer" style={{ ...style }}>
      <div className="modal-footer-left-container">
        {leftButtonTitle && (
          <Button
            size="medium"
            variant="outlined"
            style={{
              width: '60px',
              height: '32px',
              opacity: '1',
              cursor: 'pointer',
            }}
            onClick={onClickLeftButton}
          >
            {leftButtonTitle}
          </Button>
        )}
        {hideOption && (
          <div className="modal-footer-hide-container" onClick={onHandleOption}>
            <Checkbox checked={checked} onChange={onHandleOption} />
            <Typography
              variant="b1"
              weight="regular"
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                marginLeft: '4px',
              }}
            >
              {hideOptionText === '' ? 'Do not show again' : hideOptionText}
            </Typography>
          </div>
        )}
      </div>
      <div className="modal-footer-right-container">
        {cancelButtonTitle && (
          <Button
            size="medium"
            variant="outlined"
            style={{
              width: '60px',
              height: '32px',
              cursor: 'pointer',
            }}
            onClick={onClose}
          >
            {cancelButtonTitle}
          </Button>
        )}
        {confirmButtonTitle && (
          <Button
            className="button"
            size="medium"
            variant="contained"
            onClick={onHandleConfirm}
            disabled={loading || isConfirmButtonDisabled}
          >
            {loading ? (
              <Spinner
                style={{ width: '40px', height: '40px', paddingTop: '4px' }}
              />
            ) : (
              confirmButtonTitle
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ModalFooter;
