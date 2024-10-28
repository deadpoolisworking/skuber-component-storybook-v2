import { FunctionComponent, useState, useEffect } from 'react';
import '../../index.css';
// import './style.css';
import Button from '../Button';
import Typography from '../Typography';

export interface Props {
  selectedDate?: Date;
  onDateClick?: (date: Date) => void;
}

const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const Calender: FunctionComponent<Props> = ({ selectedDate, onDateClick }) => {
  const [selected, setSelected] = useState<number | null>(
    selectedDate ? selectedDate.getDate() : -1,
  );
  const [hover, setHover] = useState<number | null>(-1);

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const defaultClassName = 'component-calender';

  useEffect(() => {
    if (selectedDate) setSelected(selectedDate.getDate());
  }, [selectedDate]);

  const handleDateClick = (date: number) => {
    const newSelectedDate = new Date(currentYear, currentMonth, date);
    setSelected(date);
    if (onDateClick) onDateClick(newSelectedDate);
  };

  const getEmptyDateButton = () => {
    return <div></div>;
  };

  const getDateButton = (date: number) => {
    const itemClassName = `${defaultClassName}-body-dates-item`;
    const selectedClassName = `${itemClassName}-${
      selected === date ? 'selected' : 'unselected'
    }`;
    const hoverClassName = `${itemClassName}-${
      hover === date ? 'focused' : 'unfocused'
    }`;

    return (
      <div
        key={date}
        className={`${itemClassName} ${selectedClassName} ${hoverClassName}`}
        onClick={() => handleDateClick(date)}
        onMouseEnter={() => setHover(date)}
        onMouseLeave={() => setHover(-1)}
      >
        <Typography variant="b1" weight="regular">
          {date}
        </Typography>
      </div>
    );
  };

  const getDateList = () => {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);

    const list: any[] = [];

    const offset = firstDay.getDay();
    for (let i = 0; i < offset; ++i) {
      list.push(getEmptyDateButton());
    }
    for (let i = 1; i <= lastDay.getDate(); ++i) {
      list.push(getDateButton(i));
    }
    return list;
  };

  return (
    <div className={`${defaultClassName}`}>
      <div className={`${defaultClassName}-head`}>
        <Button
          variant="text"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '40px',
            height: '40px',
            minWidth: '0px',
            padding: '0px',
          }}
        >
          {'<'}
        </Button>
        <Typography
          variant="s1"
          style={{
            width: '216px',
            height: '19px',
            textAlign: 'center',
          }}
        >
          {`${new Date(currentYear, currentMonth).toLocaleString('default', {
            month: 'long',
          })} ${currentYear}`}
        </Typography>
        <Button
          variant="text"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '40px',
            height: '40px',
            minWidth: '0px',
            padding: '0px',
          }}
        >
          {'>'}
        </Button>
      </div>
      <div className={`${defaultClassName}-body`}>
        <div className={`${defaultClassName}-body-days`}>
          {days.map((day, index) => (
            <Typography
              key={`${defaultClassName}-body-days-${day}__${index}`}
              variant="b1"
              weight="medium"
              style={{ color: 'var(--text-tertiary)' }}
            >
              {day}
            </Typography>
          ))}
        </div>
        <div className={`${defaultClassName}-body-dates`}>{getDateList()}</div>
      </div>
    </div>
  );
};

export default Calender;
