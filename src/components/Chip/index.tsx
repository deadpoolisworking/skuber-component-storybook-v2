import { FunctionComponent } from 'react';
import { tagClose, warningSvg } from 'assets';
import '../../index.css';
// import './style.css';
import Typography from '../Typography';

interface Props {
  label?: string;
  selected?: boolean;
  hasDelete?: boolean;
  hasIcon?: boolean;
  onChange?: (selected: boolean) => void;
  deletedTapped?: (label: string) => void;
}

const Chip: FunctionComponent<Props> = (props: Props) => {
  const {
    selected = false,
    hasDelete = false,
    hasIcon = false,
    label,
    onChange,
    deletedTapped,
  } = props;

  const handleClick = () => onChange && onChange(!selected);
  const handleDeleteClick = () =>
    deletedTapped && label && deletedTapped(label);

  return (
    <div
      className={`component-chip ${selected && 'component-chip-selected'}`}
      onClick={handleClick}
    >
      {hasIcon && <img src={warningSvg} alt="" />}
      {label && (
        <Typography variant="b1" weight="regular">
          {label}
        </Typography>
      )}
      {hasDelete && (
        <img
          src={tagClose}
          className="component-chip-tag"
          onClick={handleDeleteClick}
          alt=""
        />
      )}
    </div>
  );
};

export default Chip;
