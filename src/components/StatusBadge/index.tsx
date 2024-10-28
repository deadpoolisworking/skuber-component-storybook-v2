import Typography from '../Typography';
import Spinner from '../Spinner';
import { FunctionComponent } from 'react';
import '../../index.css';
// import './style.css';

export interface Props {
  status: 'good' | 'neutral' | 'bad' | 'etc';
  children?: any;
  isLoading?: boolean;
}

const StatusBadge: FunctionComponent<Props> = (props: Props) => {
  const { status, children, isLoading = false } = props;

  const defaultClassName = 'status-badge';
  const statusClassName = `status-badge-${status}`;
  const textColor =
    status === 'good'
      ? '#00c02a'
      : status === 'neutral'
        ? '#538bff'
        : status === 'bad'
          ? '#ffa800'
          : 'rgba(255, 255, 255, 0.4)';

  return (
    <div className={`${defaultClassName} ${statusClassName}`}>
      <Typography
        variant="b1"
        weight="regular"
        style={{
          color: textColor,
          alignSelf: 'center',
        }}
      >
        {children}
      </Typography>
      {isLoading && (
        <Spinner
          style={{
            width: '30px',
            height: '36px',
          }}
        />
      )}
    </div>
  );
};

export default StatusBadge;
