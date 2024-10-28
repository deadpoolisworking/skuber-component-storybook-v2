import { FunctionComponent, useState } from 'react';
import Button from '../Button';
import IconButton from '../IconButton';
import InputDate from '../InputDate';
import InputTime from '../InputTime';
import RangeCalender from '../RangeCalender';
import Typography from '../Typography';
import { closeIconSvg } from 'assets';
import '../../index.css';
// import './style.css';

export interface Props {
  from: Date | null | undefined;
  to: Date | null | undefined;
  onFromChange: (date: Date | null) => void;
  onToChange: (date: Date | null) => void;
  onSubmitClick?: (data: { start: any; end: any }) => void;
  onCancelClick?: () => void;
  onResetClick?: () => void;
}

const DateRangePicker: FunctionComponent<Props> = (props: Props) => {
  const {
    from,
    to,
    onFromChange,
    onToChange,
    onSubmitClick,
    onCancelClick,
    onResetClick,
  } = props;
  const [fromDate, setFromDate] = useState<Date | null | undefined>(from);
  const [toDate, setToDate] = useState<Date | null | undefined>(to);

  const defaultClassName = 'component-date-range-picker';

  const handleResetClick = () => {
    setFromDate(from);
    setToDate(to);
    if (onResetClick) {
      setToDate(null);
      setFromDate(null);
      onResetClick();
    }
  };

  const onHandleFromChange = (data: any) => {
    setFromDate(data);
    setToDate(null);
    onFromChange?.(data);
  };

  const onHandleToChange = (data: any) => {
    if (fromDate && data && data < fromDate) {
      setToDate(fromDate);
    } else {
      setToDate(data);
    }
    onToChange?.(data);
  };

  const onHandleConfirm = () => {
    onSubmitClick && onSubmitClick({ start: fromDate, end: toDate });
  };

  return (
    <div className={`${defaultClassName}`}>
      <div className={`${defaultClassName}-header`}>
        <Typography variant="s1">Period</Typography>
        <IconButton icon={closeIconSvg} onClick={onCancelClick} />
      </div>
      <div className={`${defaultClassName}-contents`}>
        <div className={`${defaultClassName}-contents-right`}>
          <div className={`${defaultClassName}-contents-right-header`}>
            <div className={`${defaultClassName}-contents-right-from`}>
              <Typography
                variant="b1"
                weight="semi-bold"
                style={{ marginBottom: '16px' }}
              >
                {/* {t('component_date.from')} */}
                From
              </Typography>
              <div
                className={`${defaultClassName}-contents-right-from-date-time`}
              >
                <InputDate date={fromDate} onChange={onHandleFromChange} />
                <InputTime time={fromDate} onChange={onHandleFromChange} />
              </div>
            </div>
            <div className={`${defaultClassName}-contents-right-to`}>
              <Typography
                variant="b1"
                weight="semi-bold"
                style={{ marginBottom: '16px' }}
              >
                {/* {t('component_date.to')} */}
                To
              </Typography>
              <div
                className={`${defaultClassName}-contents-right-to-date-time`}
              >
                <InputDate
                  date={toDate}
                  min={fromDate}
                  onChange={onHandleToChange}
                />
                <InputTime time={toDate} onChange={onHandleToChange} />
              </div>
            </div>
          </div>
          <RangeCalender
            from={fromDate}
            to={toDate}
            onFromChange={onHandleFromChange}
            onToChange={onHandleToChange}
          />
        </div>
      </div>
      <div className={`${defaultClassName}-footer`}>
        <Button variant="outlined" onClick={handleResetClick}>
          {/* {t('component_modal.reset')} */}
          Reset
        </Button>
        <div className={`${defaultClassName}-footer-right`}>
          <Button
            variant="outlined"
            style={{ marginRight: '8px' }}
            onClick={onCancelClick}
          >
            {/* {t('component_modal.cancel')} */}
            Cancel
          </Button>
          <Button variant="contained" onClick={onHandleConfirm}>
            {/* {t('component_modal.complete')} */}
            Complete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;
