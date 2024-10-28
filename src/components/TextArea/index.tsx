import '../../index.css';
// import './style.css';
import { ChangeEvent, FunctionComponent, useState, FormEvent } from 'react';
import Typography from '../Typography';
/**
 * onPressEnter : 엔터 눌렀을 때의 동작 정의
 */
export interface Props {
  style?: any;
  inputStyle?: any;
  inputText?: string;
  children?: any;
  maxLength?: number;

  disabled?: boolean;
  placeholderStyle?: any;
  leftDecoration?: string;
  rightDecoration?: string;

  type?: 'email' | 'text' | 'password' | 'number';
  helperText?: string;

  placeholder?: string | number | null;
  defaultValue?: string | number;
  autoFocus?: boolean;

  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onPressEnter?: (value: string) => void;
  onInvalid?: (e: FormEvent<HTMLTextAreaElement>) => void;
}

const TextArea: FunctionComponent<Props> = (props: Props) => {
  const {
    style,
    inputStyle,
    inputText,
    maxLength,
    disabled,
    defaultValue,
    leftDecoration,
    type,
    placeholderStyle,
    children,
    rightDecoration,
    placeholder,
    autoFocus,
    onChange,
    onPressEnter,
    onInvalid,
  } = props;

  /**
   * 스토리북에서 엔터키 눌렀을때 폼 전송되는 것 방지
   * @param event
   */
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const [focused, setFocused] = useState<string>(
    defaultValue && defaultValue.toString().length > 0
      ? 'focused'
      : 'unfocused',
  );
  const [inputValue, setInputValue] = useState<string>('');

  const defaultClassName = 'component-textarea';
  const labelClassName = `${defaultClassName}-label${
    leftDecoration ? '-left-deco' : ''
  }`;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) onChange(e);
    setInputValue(e.target.value);
  };

  const handleFocus = () => {
    setFocused('focused');
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > 0) setFocused('focused');
    else setFocused('unfocused');
  };

  return (
    <form
      className={`${defaultClassName}`}
      style={style}
      onSubmit={handleSubmit}
    >
      {leftDecoration && <img src={leftDecoration} alt="" />}
      <div className={`${labelClassName}-${focused}`} onClick={handleFocus}>
        <Typography
          variant="label"
          weight="regular"
          style={{
            color: 'var(--text-tertiary)',
            ...placeholderStyle,
          }}
        >
          {placeholder}
        </Typography>
      </div>
      <textarea
        className={`${defaultClassName}-input`}
        maxLength={maxLength}
        defaultValue={defaultValue}
        disabled={disabled}
        value={inputText}
        rows={10}
        autoFocus={autoFocus || focused === 'focused'}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={inputStyle}
        onInvalid={onInvalid ? onInvalid : () => {}}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && onPressEnter) {
            e.currentTarget.value = '';
            onPressEnter(inputValue);
            return setInputValue('');
          }
        }}
      />
      {rightDecoration && <img src={rightDecoration} alt="" />}
      {children}
    </form>
  );
};

export default TextArea;
