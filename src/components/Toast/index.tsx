import '../../index.css';
// import './style.css';
import { closeIconSvg } from 'assets';
import Typography from '../Typography';
import { FunctionComponent } from 'react';

export interface Props {
  type: 'default' | 'action';
  label?: string;
  children?: any;
  deleteTapped?: (tapped: boolean) => void;
}

const Toast: FunctionComponent<Props> = (props: Props) => {
  const { type = 'default', label, children, deleteTapped } = props;

  const defaultToggleClassName = 'component-toast';

  const handleDeleteClick = () => deleteTapped && deleteTapped(true);

  return (
    <div className={`${defaultToggleClassName} `}>
      <Typography variant="b1" weight="medium">
        {label}
      </Typography>
      {type === 'action' && children && <>{children}</>}
      <img
        src={closeIconSvg}
        className="component-toast-delete"
        alt=""
        onClick={handleDeleteClick}
      />
    </div>
  );
};

export default Toast;
