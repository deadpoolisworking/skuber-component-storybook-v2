import { ChangeEvent, FunctionComponent } from 'react';
import '../../index.css';
// import './style.css';

export interface Props {
  time?: Date | null;
  readOnly?: boolean;
  onChange?: (date: Date | null) => void;
}

const InputTime: FunctionComponent<Props> = (props: Props) => {
  const { time, readOnly, onChange } = props;

  const defaultClassName = 'component-input-time';

  const setFormat = (date: Date | null | undefined) => {
    if (!date) return 'HH:mm';

    const hours = date.getHours();
    const minutes = date.getMinutes();

    const timeString = `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;

    return timeString;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (onChange) {
      const date = time ? time : new Date();

      onChange(
        new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          parseInt(value.substring(0, 2)),
          parseInt(value.substring(3, 5)),
          0,
        ),
      );
    }
  };

  return (
    <form className={`${defaultClassName}`}>
      <input
        readOnly={readOnly}
        type="time"
        value={time ? setFormat(time) : '00:00'}
        onChange={(e) => handleChange(e)}
      />
    </form>
  );
};

export default InputTime;
