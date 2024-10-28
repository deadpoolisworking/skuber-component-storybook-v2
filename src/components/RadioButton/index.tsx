import Typography from '../Typography';
import { FunctionComponent } from 'react';
import radioSelected from 'assets/svg/radio_button_selected.svg';
import radioDefault from 'assets/svg/radio_button_default.svg';
import '../../index.css';
// import './style.css';

export interface Props {
  title: string;
  isSelected: boolean | undefined;
  disabled?: boolean;
  onChange?: () => void;
  style?: any;
}

const RadioButton: FunctionComponent<Props> = (props: Props) => {
  const { title, isSelected, onChange, style } = props;

  return (
    <div
      className="single-radio-button-container"
      onClick={onChange}
      style={style}
    >
      <img
        className="single-radio-button"
        src={isSelected ? radioSelected : radioDefault}
        alt=""
      />
      <Typography variant="b1" weight="regular">
        {title}
      </Typography>
    </div>
  );
};

export default RadioButton;
