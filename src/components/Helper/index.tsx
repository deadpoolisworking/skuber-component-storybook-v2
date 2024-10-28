import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';
// import './style.css';

export interface Props {
  type?: 'center' | 'left';
  content?: string;
  children: React.ReactNode;
  parentPosition?: { x: number; y: number };
  title?: string;
  style?: any;
  titleStyle?: any;
  contentIcon?: string;
}

const Helper: React.FC<Props> = ({
  type = 'center',
  children,
  title,
  style,
  titleStyle,
  content,
  contentIcon,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const childrenRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (childrenRef.current) {
      const rect = childrenRef.current.getBoundingClientRect();
      setPosition({
        x: rect.left + rect.width / 2,
        y: rect.bottom + 10,
      });
    }
  }, [isHovered, childrenRef]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const component = (
    <div
      style={{
        display: 'flex',
        flexDirection: contentIcon ? 'row' : 'column',
        justifyContent: 'center',
      }}
    >
      {isHovered && content && (
        <div
          className={`fixed-helper ${type}`}
          style={{ left: position.x, top: position.y }}
        >
          {type === 'left' ? (
            <div className="fixed-helper-triangle-left" />
          ) : (
            <div className="fixed-helper-triangle-center" />
          )}
          {title && (
            <div
              style={{
                marginBottom: '10px',
                ...titleStyle,
              }}
            >
              {title}
            </div>
          )}
          {content}
          {contentIcon && (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              {'('}
              <img
                width={16}
                height={16}
                src={contentIcon}
                alt=""
                style={{ marginTop: '1px' }}
              />
              {')'}
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block', position: 'relative', ...style }}
    >
      <div ref={childrenRef}>{children}</div>
      {ReactDOM.createPortal(component, document.body)}
    </div>
  );
};

export default Helper;
