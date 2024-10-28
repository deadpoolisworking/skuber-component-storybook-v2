import '../../index.css';
// import './style.css';
import { FunctionComponent, useEffect, useState } from 'react';
import IconButton from '../IconButton';
import Typography from '../Typography';
import { arrowBackSvg, arrowNextSvg } from 'assets';

export interface Props {
  from?: Date | null | undefined;
  to?: Date | null | undefined;

  onFromChange?: (date: Date | null) => void;
  onToChange?: (date: Date | null) => void;
}

const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const today = new Date();

const RangeCalender: FunctionComponent<Props> = (props: Props) => {
  const { from, to, onFromChange, onToChange } = props;

  const [fromDate, setFromDate] = useState<Date>(
    new Date(today.getFullYear(), today.getMonth(), 1),
  );
  const [toDate, setToDate] = useState<Date>(
    new Date(today.getFullYear(), today.getMonth() + 2, 0),
  );

  const [selectedFromDate, setSelectedFromDate] = useState<Date | null>(
    from ? from : null,
  );
  const [selectedToDate, setSelectedToDate] = useState<Date | null>(
    to ? to : null,
  );

  const defaultClassName = 'component-range-calender';

  const movePrevMonth = (date: Date, flag: 'from' | 'to') => {
    const newYear = date.getFullYear();
    const newMonth = date.getMonth() - (flag === 'from' ? 1 : 0);
    const newDate = flag === 'from' ? 1 : 0;

    if (flag === 'from') setFromDate(new Date(newYear, newMonth, newDate));
    else setToDate(new Date(newYear, newMonth, newDate));
  };

  const moveNextMonth = (date: Date, flag: 'from' | 'to') => {
    const newYear = date.getFullYear();
    const newMonth = date.getMonth() + (flag === 'from' ? 1 : 2);
    const newDate = flag === 'from' ? 1 : 0;

    if (flag === 'from') setFromDate(new Date(newYear, newMonth, newDate));
    else setToDate(new Date(newYear, newMonth, newDate));
  };

  const getEmptyDateButton = () => {
    const crypto: Crypto = window.crypto;
    const array: Uint32Array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return <div key={array[0].toString(10)}></div>;
  };

  const getDateButton = (date: Date) => {
    const from = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      0,
      0,
      0,
    );
    const to = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      23,
      59,
      59,
    );

    const itemClassName = `${defaultClassName}-body-dates-item`;
    const selectedClassName = `${itemClassName}-${
      selectedFromDate?.valueOf() === from.valueOf() ||
      (selectedToDate &&
        selectedToDate.valueOf() >= from.valueOf() &&
        selectedToDate.valueOf() <= to.valueOf())
        ? 'selected'
        : 'unselected'
    }`;

    const rangedClassName = `${itemClassName}-${
      selectedFromDate &&
      selectedToDate &&
      from.valueOf() > selectedFromDate.valueOf() &&
      to.valueOf() < selectedToDate.valueOf()
        ? 'ranged'
        : 'unranged'
    }`;

    const borderClassName = `${itemClassName}${
      date.valueOf() === selectedFromDate?.valueOf() ? '-from' : ''
    }${
      to.valueOf() === selectedToDate?.valueOf() ||
      date.valueOf() === selectedToDate?.valueOf()
        ? '-to'
        : ''
    }`;

    const handleSelectedFromDate = (date: Date | null) => {
      setSelectedFromDate(date);
      if (onFromChange) onFromChange(date);
    };

    const handleSelectedToDate = (date: Date | null) => {
      setSelectedToDate(date);
      if (onToChange) onToChange(date);
    };

    const handleClick = () => {
      if (!selectedFromDate) {
        handleSelectedFromDate(from);
      } else if (!selectedToDate) {
        if (selectedFromDate.valueOf() < date.valueOf()) {
          handleSelectedToDate(to);
        } else {
          const newFrom = new Date(
            selectedFromDate.getFullYear(),
            selectedFromDate.getMonth(),
            selectedFromDate.getDate(),
            23,
            59,
            59,
          );
          handleSelectedToDate(newFrom);
          handleSelectedFromDate(from);
        }
      } else {
        handleSelectedFromDate(from);
        handleSelectedToDate(null);
      }
    };

    return (
      <div
        key={date.valueOf()}
        className={`${itemClassName} ${selectedClassName} ${rangedClassName} ${borderClassName}`}
        onClick={() => handleClick()}
      >
        <Typography
          variant="b1"
          weight="regular"
          style={{
            color: rangedClassName.includes('unranged')
              ? 'var(--text-ui-text-secondary)'
              : 'var(--interation-ui-interation-primary-contrast)',
          }}
        >
          {date.getDate().toString()}
        </Typography>
      </div>
    );
  };

  const getDateList = (date: Date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const list: any[] = [];

    const offset = firstDay.getDay();
    for (let i = 0; i < offset; ++i) {
      list.push(getEmptyDateButton());
    }
    for (let i = 1; i <= lastDay.getDate(); ++i) {
      const current = new Date(firstDay.getFullYear(), firstDay.getMonth(), i);

      list.push(getDateButton(current));
    }

    return list;
  };

  useEffect(() => {
    setSelectedFromDate(from ? from : null);
    setSelectedToDate(to ? to : null);
  }, [from, to]);

  return (
    <div className={`${defaultClassName}-container`}>
      <div className={`${defaultClassName}`} style={{ marginRight: '20px' }}>
        <div
          className={`${defaultClassName}-head ${defaultClassName}-head-from`}
        >
          <IconButton
            icon={arrowBackSvg}
            onClick={() => movePrevMonth(fromDate, 'from')}
            style={{
              width: '32px',
              height: '32px',
            }}
          />
          <Typography
            variant="s1"
            style={{
              width: '216px',
              height: '19px',
              textAlign: 'center',
            }}
          >{`${fromDate.getMonth() + 1} ${fromDate.getFullYear()}`}</Typography>
          {!(
            fromDate.getFullYear() === today.getFullYear() &&
            fromDate.getMonth() === today.getMonth()
          ) && (
            <IconButton
              icon={arrowNextSvg}
              onClick={() => moveNextMonth(fromDate, 'from')}
              style={{
                width: '32px',
                height: '32px',
              }}
            />
          )}
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
          <div className={`${defaultClassName}-body-dates`}>
            {getDateList(fromDate)}
          </div>
        </div>
      </div>
      <div className={`${defaultClassName}`}>
        <div className={`${defaultClassName}-head ${defaultClassName}-head-to`}>
          {!(
            toDate.getFullYear() === today.getFullYear() &&
            toDate.getMonth() === today.getMonth() + 1
          ) && (
            <IconButton
              icon={arrowBackSvg}
              onClick={() => movePrevMonth(toDate, 'to')}
              style={{
                width: '32px',
                height: '32px',
              }}
            />
          )}
          <Typography
            variant="s1"
            style={{
              width: '216px',
              height: '19px',
              textAlign: 'center',
            }}
          >
            {`${toDate.getMonth() + 1} ${toDate.getFullYear()}`}
          </Typography>
          <IconButton
            icon={arrowNextSvg}
            onClick={() => moveNextMonth(toDate, 'to')}
            style={{
              width: '32px',
              height: '32px',
            }}
          />
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
          <div className={`${defaultClassName}-body-dates`}>
            {getDateList(toDate)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeCalender;
