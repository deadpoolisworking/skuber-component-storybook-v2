import '../../../index.css';
// import './style.css';
import Typography from '../../Typography';
import { FunctionComponent } from 'react';

interface Props {
  value: number;
  style?: any;
}

const HorizontalBar: FunctionComponent<Props> = (props: Props) => {
  const { value, style } = props;

  return (
    <div className="horizontal-bar-container" style={style}>
      <div className="horizontal-bar-progress">
        <div
          style={{
            width: `${value >= 100 ? 240 : 240 * (value / 100)}px`,
            height: '16px',
            backgroundColor:
              value > 50
                ? 'var(--status-ui-status-warning)'
                : 'var(--status-good-lightgreen)',
            borderRadius: '4px',
          }}
        ></div>
      </div>
      <div>
        <Typography
          style={{
            color:
              value > 50
                ? 'var(--status-ui-status-warning)'
                : 'var(--status-good-lightgreen)',
          }}
        >
          {value.toFixed(2)}%
        </Typography>
      </div>
    </div>
  );
};

export default HorizontalBar;
