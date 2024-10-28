import searchIcon from 'assets/svg/search.svg';
import '../../index.css';
// import './style.css';
import {
  ChangeEvent,
  FunctionComponent,
  useState,
  FormEvent,
  useEffect,
  useRef,
} from 'react';
import Typography from '../Typography';
import {
  arrowDownSvg,
  arrowUpSvg,
  triangleDownSvg,
  triangleUpSvg,
} from 'assets';

export interface Props {
  type?: 'default' | 'searchFilter';
  inputType?:
    | 'email'
    | 'text'
    | 'password'
    | 'number'
    | 'uid'
    | 'box'
    | 'custom-time';
  inputText?: string;

  category?: string[];
  selectCategory?: (index: number) => void;

  error?: boolean;
  errorText?: string;
  valid?: boolean;
  disabled?: boolean;

  leftDecoration?: string;
  leftTextDecoration?: string;
  rightDecoration?: string;
  secondRightDecoration?: string;

  verifyText?: string;
  placeholder?: string | number | null;
  defaultValue?: any;
  autoFocus?: boolean;

  min?: number;
  max?: number;
  maxLength?: number;

  children?: any;

  style?: any;
  inputStyle?: any;
  rightStyle?: any;
  secondRightStyle?: any;
  placeholderStyle?: any;

  onChange?: (e: ChangeEvent<HTMLInputElement>, categoryIndex?: number) => void;
  onPressEnter?: (value: string) => void;
  onInvalid?: (e: FormEvent<HTMLInputElement>) => void;
  rightDecorationTapped?: (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => void;
  secondRightDecorationTapped?: (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => void;
}

const InputField: FunctionComponent<Props> = (props: Props) => {
  const {
    type = 'default',
    valid = true,
    inputText,
    disabled = false,
    defaultValue,
    leftDecoration,
    leftTextDecoration,
    inputType,
    children,
    rightDecoration,
    secondRightDecoration,
    error = false,
    errorText,
    placeholder,
    autoFocus,
    min,
    max,
    maxLength = 253,

    category = [],

    style,
    inputStyle,
    placeholderStyle,
    secondRightStyle,
    rightStyle,

    onChange,
    onPressEnter,
    onInvalid,
    rightDecorationTapped,
    secondRightDecorationTapped,
  } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const inputFieldRef = useRef<HTMLFormElement>(null);
  const [focused, setFocused] = useState<string>(
    (inputText && inputText.length > 0) || (defaultValue && defaultValue.length)
      ? 'focused'
      : 'unfocused',
  );
  const [inputValue, setInputValue] = useState<string>(
    inputType === 'number' ? inputText || '1' : defaultValue,
  );
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);

  // const [inputFieldBackgroundColor, setInputFieldBackgroundColor] =
  //   useState<string>('');
  const defaultClassName = 'component-inputfield';
  const labelClassName = `${defaultClassName}-label${
    leftDecoration ? '-left-deco' : ''
  }`;

  const errorTextStyle: React.CSSProperties = {
    color: 'var(--status-danger)',
    marginTop: '-18px',
    fontSize: 'var(--body-label-bold-size)',
    fontWeight: '400',
    position: 'absolute',
    top: '57px',
    left: '-1px',
  };

  useEffect(() => {
    setInputValue(inputText || '');
  }, [inputText]);

  useEffect(() => {
    disabled && setFocused('focused');
  }, [disabled]);

  // useEffect(() => {
  //   if (inputFieldRef.current) {
  //     const computedStyle = getComputedStyle(inputFieldRef.current);
  //     const bgColor = computedStyle.backgroundColor;
  //     setInputFieldBackgroundColor(bgColor);
  //   }
  // }, []);

  const formatTimeInput = (value: string) => {
    if (/^\d{4}$/.test(value)) {
      const hours = Math.min(23, parseInt(value.slice(0, 2), 10)); // 시간은 23을 초과하지 않음
      const minutes = Math.min(59, parseInt(value.slice(2), 10)); // 분은 59를 초과하지 않음
      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
        2,
        '0',
      )}`; // 00:00 형식으로 반환
    }
    return value;
  };

  const handleSubmit = (event: any) => event.preventDefault();
  const handleFocus = () => setFocused('focused');

  const handleChange = (e: any) => {
    if (inputType === 'custom-time') {
      let newValue = e.target.value;
      newValue = newValue.replace(/[^0-9]/g, ''); // 숫자 이외의 입력 제거
      if (newValue.length > 4) newValue = newValue.slice(0, 4); // 최대 4자리까지만 입력 허용
      newValue = formatTimeInput(newValue); // 시간 형식으로 변환

      if (onChange) onChange(e);
      setInputValue(newValue);
    } else {
      const newValue =
        inputType === 'number'
          ? Number(e.target.value) >= 0
            ? e.target.value
            : '0'
          : e.target.value;
      if (onChange)
        type === 'searchFilter'
          ? onChange(e, selectedCategoryIndex)
          : onChange(e);
      setInputValue(newValue);
    }
  };

  const handleBlur = (e: any) => {
    if (inputType === 'custom-time' && !e.target.value) {
      setInputValue('00:00');
      return;
    }
    if (e.target.value.length > 0) setFocused('focused');
    else setFocused('unfocused');
  };

  const incrementValue = () => {
    const newValue = String(Number(inputValue) + 1);
    setInputValue(newValue);
    if (onChange)
      onChange({
        target: { value: newValue },
      } as ChangeEvent<HTMLInputElement>);
  };

  const decrementValue = () => {
    const newValue = String(Number(inputValue) - 1);
    setInputValue(newValue);
    if (Number(inputValue) < 0) setInputValue('0');
    if (onChange)
      onChange({
        target: { value: newValue },
      } as ChangeEvent<HTMLInputElement>);
  };

  const handleOpenCategory = () => setIsOpen((prev) => !prev);

  const handleCategory = (index: number) => {
    setSelectedCategoryIndex(index);
    setIsOpen(false);
  };

  return (
    <>
      {type === 'default' ? (
        <>
          <form
            ref={inputFieldRef}
            className={`${defaultClassName}`}
            style={{
              ...style,
              border: error
                ? '1px solid var(--status-danger)'
                : !valid
                  ? '1px solid var(--status-danger)'
                  : '',
              marginBottom: '5px',
            }}
            onSubmit={handleSubmit}
          >
            {leftDecoration && <img src={leftDecoration} alt="" />}
            {leftTextDecoration && (
              <Typography variant="b1" weight="thin">
                {leftTextDecoration}
              </Typography>
            )}
            {!disabled && (
              <div
                className={`${labelClassName}-${focused}`}
                onClick={handleFocus}
              >
                <Typography
                  variant="label"
                  weight="regular"
                  style={{
                    color: 'var(--text-tertiary)',
                    padding: '0px 4px',
                    backgroundColor: `#363636`,
                    marginTop: focused === 'focused' ? '-2px' : '',
                    ...placeholderStyle,
                  }}
                >
                  {placeholder}
                </Typography>
              </div>
            )}
            <input
              className={`${defaultClassName}-input`}
              defaultValue={defaultValue}
              disabled={disabled}
              value={
                inputType === 'number'
                  ? Number(inputValue) <= 1
                    ? 1
                    : inputValue
                  : inputValue
              }
              autoFocus={autoFocus || focused === 'focused'}
              type={
                !inputType ? 'text' : inputType === 'uid' ? 'text' : inputType
              }
              min={inputType === 'number' && min ? min : undefined}
              max={inputType === 'number' && max ? max : undefined}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange && handleChange(e)
              }
              onFocus={handleFocus}
              maxLength={maxLength}
              onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                handleBlur && handleBlur(e)
              }
              style={{
                ...inputStyle,
                color: disabled && 'gray',
              }}
              onInvalid={onInvalid ? onInvalid : () => {}}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && onPressEnter) onPressEnter(inputValue);
              }}
            />
            {inputType === 'number' && !disabled && (
              <div className="number-spinner">
                <div className="increment" onClick={incrementValue}>
                  <img src={triangleUpSvg} alt="up" style={{ width: '10px' }} />
                </div>
                <div className="decrement" onClick={decrementValue}>
                  <img
                    src={triangleDownSvg}
                    alt="down"
                    style={{ width: '10px' }}
                  />
                </div>
              </div>
            )}
            {rightDecoration && (
              <img
                src={rightDecoration}
                style={rightStyle}
                alt=""
                className="input-right-deco"
                onClick={rightDecorationTapped}
              />
            )}
            {secondRightDecoration && (
              <img
                src={secondRightDecoration}
                alt=""
                style={secondRightStyle}
                onClick={secondRightDecorationTapped}
              />
            )}
            {children}
            {error && (
              <Typography style={errorTextStyle}>{errorText}</Typography>
            )}
          </form>
        </>
      ) : (
        <>
          <form
            ref={inputFieldRef}
            className={`${defaultClassName}`}
            style={{ marginBottom: '5px', padding: '0px' }}
            onSubmit={handleSubmit}
          >
            <div
              className="component-input-category"
              onClick={handleOpenCategory}
            >
              <Typography
                variant="b1"
                weight="regular"
                style={{
                  color: 'var(--text-ui-text-secondary)',
                  marginRight: '20px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '100%',
                }}
              >
                {category ? category[selectedCategoryIndex] : '-'}
              </Typography>
              <img
                // className={`${itemClassName}-triangle`}
                src={isOpen ? arrowUpSvg : arrowDownSvg}
                alt=""
              />
              {isOpen && (
                <div className={`component-input-category-wrapper`}>
                  {category &&
                    category.length > 0 &&
                    category.map((singleCategory, index) => (
                      <div
                        key={index}
                        className={`component-input-category-item`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCategory(index);
                        }}
                      >
                        <Typography
                          variant="b1"
                          weight="regular"
                          style={{
                            color: 'var(--text-ui-text-secondary)',
                          }}
                        >
                          {singleCategory}
                        </Typography>
                      </div>
                    ))}
                </div>
              )}
            </div>
            <div className="component-input-category-divider" />
            <img src={searchIcon} alt="" />
            <input
              className={`${defaultClassName}-input`}
              defaultValue={defaultValue}
              placeholder="Search"
              disabled={disabled}
              value={inputValue}
              autoFocus={autoFocus || focused === 'focused'}
              type={'text'}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange && handleChange(e)
              }
              onFocus={handleFocus}
              onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                handleBlur && handleBlur(e)
              }
              style={{ ...inputStyle, margin: '10px' }}
              onInvalid={onInvalid ? onInvalid : () => {}}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && onPressEnter) onPressEnter(inputValue);
              }}
            />
          </form>
        </>
      )}
    </>
  );
};

export default InputField;
