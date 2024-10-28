import { FunctionComponent } from 'react';
import '../../index.css';
// import './style.css';

export interface Props {
  style?: any;
  children?: any;
  position?: any;
  marginX: number;
  marginY: number;
}

const Tooltip: FunctionComponent<Props> = (props: Props) => {
  const { style, position, children, marginX, marginY } = props;

  return (
    <div
      className="tooltip-container"
      style={{
        transform: `translate(${position.x - marginX}px, ${
          position.y - marginY
        }px)`,
        ...style,
      }}
    >
      {children ? children : 'test'}
    </div>
  );
};

export default Tooltip;
