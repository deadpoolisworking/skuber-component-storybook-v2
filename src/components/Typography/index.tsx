import '../../index.css';
import { forwardRef } from 'react';
// import './style.css';

export interface Props {
  variant?:
    | 'h1'
    | 'h2'
    | 's1'
    | 'b1'
    | 'b2'
    | 'label'
    | 'link'
    | 'link-lowercase'
    | 'code';
  weight?: 'bold' | 'semi-bold' | 'medium' | 'regular' | 'thin';
  ellipsis?: boolean;
  style?: any;
  children?: any;
  link?: string;
  dangerouslySetInnerHTML?: any;
  onClick?: () => void;
}

const Typography = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { variant, weight, style, ellipsis, children, onClick } = props;

  const defaultClassName = 'component-typography';
  const variantClassName = `${defaultClassName}-${
    variant === undefined ? 's1' : variant
  }`;
  const weightClassName = `${variantClassName}-${
    weight === undefined ? 'bold' : weight
  }`;
  const ellipsisClassName = `${defaultClassName}-${
    ellipsis === undefined ? 'non-ellipsis' : 'ellipsis'
  }`;

  return (
    <div
      className={`${defaultClassName} ${variantClassName} ${weightClassName} ${ellipsisClassName}`}
      style={{ ...style }}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </div>
  );
});

export default Typography;
