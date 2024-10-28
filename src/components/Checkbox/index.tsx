import { FunctionComponent } from 'react';
import { checkBox } from 'assets';
import '../../index.css';
// import './style.css';

export interface Props {
  checked?: boolean;
  label?: string;
  style?: any;
  onChange?: (checked: boolean) => void;
}

const Checkbox: FunctionComponent<Props> = (props: Props) => {
  const { checked = false, label, style, onChange } = props;

  const handleClick = () => onChange && onChange(!checked);

  return (
    <div
      className="component-checkbox"
      style={{ cursor: 'pointer', ...style }}
      onClick={handleClick}
    >
      <div
        className={`component-checkbox-rect component-checkbox-rect-${
          checked ? 'checked' : 'unchecked'
        }`}
      >
        {checked && <img src={checkBox} alt="" />}
      </div>
      {label && <div className="component-checkbox-label">{label}</div>}
    </div>
  );
};

export default Checkbox;
