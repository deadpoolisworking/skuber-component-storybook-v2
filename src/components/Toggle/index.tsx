import '../../index.css';
// import './style.css';
import { defaultStar, selectedStar } from 'assets';
import { FunctionComponent } from 'react';

export interface Props {
  type: 'switch' | 'favorite';
  value?: boolean;
  onChange?: () => void;
}

const Toggle: FunctionComponent<Props> = (props: Props) => {
  const { type, value, onChange } = props;

  const defaultContainerClassName = 'component-toggle-container';
  const defaultToggleClassName = 'component-toggle-toggle';

  return (
    <>
      {type === 'switch' ? (
        <div
          className={`${defaultContainerClassName} ${defaultContainerClassName}-${
            value ? 'on' : 'off'
          }`}
          style={{ cursor: 'pointer' }}
          onClick={onChange}
        >
          <div
            className={`${defaultToggleClassName} ${defaultToggleClassName}-${
              value ? 'on' : 'off'
            }`}
          ></div>
        </div>
      ) : (
        <img
          width={20}
          height={20}
          src={value ? selectedStar : defaultStar}
          onClick={onChange}
          alt=""
          style={{ cursor: 'pointer' }}
        />
      )}
    </>
  );
};

export default Toggle;
