import { FunctionComponent } from 'react';
import '../../index.css';
// import './style.css';

export interface Props {
  icon?: string;
  style?: {};
  onClick?: () => void;
}

const IconButton: FunctionComponent<Props> = (props: Props) => {
  const { icon, style, onClick } = props;
  const defaultClassName = 'component-icon-button';

  return (
    <button className={`${defaultClassName}`} onClick={onClick} style={style}>
      <img src={icon} alt="" />
    </button>
  );
};

export default IconButton;
