import { ChangeEvent, FunctionComponent } from 'react';
import '../../index.css';
// import './style.css';

export interface Props {
  date?: Date | null;
  min?: Date | null;
  readOnly?: boolean;
  onChange?: (date: Date | null) => void;
}

const InputDate: FunctionComponent<Props> = (props: Props) => {
  const { date, min, readOnly, onChange } = props;

  const defaultClassName = 'component-input-date';

  const setFormat = (date: Date | null) => {
    if (!date) return '0000-00-00';

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${month < 10 ? `0${month}` : month}-${
      day < 10 ? `0${day}` : day
    }`;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const newDate = new Date(
      parseInt(value.substring(0, 4)),
      parseInt(value.substring(5, 7)) - 1,
      parseInt(value.substring(8, 10)),
    );

    if (onChange) {
      onChange(newDate);
    }
  };

  return (
    <form className={`${defaultClassName}`}>
      <input
        readOnly={readOnly}
        type="date"
        value={date ? setFormat(date) : '0000-00-00'}
        onChange={(e) => handleChange(e)}
        min={min ? setFormat(min) : ''}
      />
    </form>
  );
};

export default InputDate;
