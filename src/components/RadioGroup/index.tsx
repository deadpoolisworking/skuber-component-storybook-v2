import '../../index.css';
// import './style.css';
import { FunctionComponent, useState } from 'react';
import Typography from '../Typography';

/**
 * displayFlex 옵션을 키면 가로 정렬이 된다
 */
export interface Props {
  list: { key: string; label: string }[];
  groupName: string;
  displayRow?: boolean;
  defaultValue?: number;
  onClick?: (index: number) => void;
  disabled?: boolean;
  isSecurity?: boolean;
}

const RadioGroup: FunctionComponent<Props> = (props: Props) => {
  const {
    list,
    groupName,
    displayRow,
    defaultValue,
    onClick,
    disabled,
    isSecurity,
  } = props;

  const [selected, setSelected] = useState<string>(list[defaultValue || 0].key);

  return (
    <div
      className="component-radio-button-container"
      style={{
        display: displayRow ? 'flex' : 'inline',
        flexDirection: 'row',
        pointerEvents: disabled ? 'none' : 'auto',
        opacity: disabled ? '0.5' : '1',
      }}
    >
      {list.map((item, index) => (
        <div
          className="component-radio-button"
          key={`${groupName}-input-${item}-${index}`}
          onClick={() => {
            if (!disabled) {
              onClick && onClick(index);
              setSelected(item.key);
            }
          }}
          style={{
            marginLeft: displayRow && index !== 0 ? '16px' : '0px',
            marginBottom: isSecurity ? '0' : '17px',
          }}
        >
          <div className="component-radio-button-circle">
            {selected === item.key && (
              <div className="component-radio-button-circle-selected"></div>
            )}
          </div>
          <div className="component-radio-button-label">
            <Typography variant="b1" weight="regular">
              {item.label}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
