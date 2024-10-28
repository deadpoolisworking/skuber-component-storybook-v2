import '../../index.css';
// import './style.css';
import Typography from '../Typography';
import closeIcon from 'assets/svg/modal_close_button.svg';
import { FunctionComponent } from 'react';

interface ModalHeaderProps {
  title: string;
  children?: any;
  leftDecoration?: any;
  style?: any;
  onClose?: () => void;
}

const ModalHeader: FunctionComponent<ModalHeaderProps> = (
  props: ModalHeaderProps,
) => {
  const { leftDecoration, children, style, title, onClose } = props;

  return (
    <div className="modal-header" style={style}>
      <div className="modal-header-left-container">
        {leftDecoration && (
          <img width={20} height={20} src={leftDecoration} alt="" />
        )}
        <Typography variant="s1" weight="bold">
          {title}
        </Typography>
      </div>
      <div className="modal-header-right-container">
        {children}
        <img
          className="modal-close-icon"
          src={closeIcon}
          onClick={onClose}
          alt=""
        />
      </div>
    </div>
  );
};

export default ModalHeader;
