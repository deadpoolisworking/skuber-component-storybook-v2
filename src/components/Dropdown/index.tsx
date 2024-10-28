import '../../index.css';
// import './style.css';
import searchIcon from 'assets/svg/search.svg';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import Typography from '../Typography';
import { arrowDownSvg, arrowUpSvg, checkWhiteSvg, hamburgerIcon } from 'assets';

interface Props {
  title?: string;
  size?: 'small' | 'medium';
  type?: 'default' | 'context';
  search?: boolean;
  searchPlaceHolder?: string;
  disabled?: boolean;
  disabledText?: string;
  isError?: boolean;
  helperText?: string;
  options: string[];
  style?: any;
  onSelect?: (index: number) => void;
}

const Dropdown: FunctionComponent<Props> = (props: Props) => {
  const {
    title,
    size = 'small',
    type = 'default',
    search,
    searchPlaceHolder = '',
    disabledText,
    helperText = '',
    disabled = false,
    isError = false,
    options = [],
    onSelect,
    style,
  } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');
  const dropMenuRef = useRef<HTMLDivElement | null>(null);
  const defaultClassName = 'component-dropdown';
  const sizeClassName = `dropdown-${size}`;
  const disabledClassName = disabled ? `dropdown-disabled` : '';
  const itemClassName = `${defaultClassName}-item`;
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(0);
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);

  //* lifecycle
  useEffect(() => {
    if (searchInput) filterOption();
    else setFilteredOptions(options);
  }, [searchInput]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropMenuRef.current &&
        !dropMenuRef.current.contains(event.target as Node)
      )
        setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOptionClick = (index: number) => {
    let resultIndex;
    setIsOpen(false);
    if (searchInput)
      resultIndex = options.findIndex(
        (option) => option === filteredOptions[index],
      );
    else resultIndex = index;
    setSelectedOptionIndex(resultIndex);
    onSelect && onSelect(resultIndex);
  };

  //* handler
  const toggleDropdown = () => !disabled && setIsOpen(!isOpen);
  const onChangeSearchInput = (input: string) => setSearchInput(input);
  const filterOption = () => {
    const lowercasedInput = searchInput.toLowerCase();
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(lowercasedInput),
    );
    setFilteredOptions(filtered);
  };

  return (
    <div className="component-dropdown-wrapper" style={style}>
      <div
        className={`${defaultClassName} ${type === 'default' && sizeClassName} ${type === 'default' && disabledClassName}`}
        style={{
          borderWidth: type === 'context' ? '0px' : '1px',
          borderRadius: type === 'context' ? '12px' : '8px',
          borderColor:
            type === 'default' && isError ? '#EB4136' : isOpen ? '#125aed' : '',
          backgroundColor: isOpen ? 'transparent' : '',
        }}
        ref={dropMenuRef}
      >
        <div className={`${itemClassName}`} onClick={toggleDropdown}>
          {type === 'context' ? (
            <div className={`${itemClassName}-button-decoration`}>
              <img src={hamburgerIcon} alt="" />
            </div>
          ) : (
            <>
              <Typography
                variant="b1"
                weight="regular"
                style={{
                  color: disabled
                    ? 'rgba(255, 255, 255, 0.2)'
                    : 'var(--text-ui-text-secondary)',
                  marginRight: '20px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '100%',
                }}
              >
                {disabled
                  ? disabledText
                    ? disabledText
                    : options[selectedOptionIndex]
                  : options[selectedOptionIndex]}
              </Typography>
              <img
                className={`${itemClassName}-triangle`}
                src={isOpen ? arrowUpSvg : arrowDownSvg}
                alt=""
                style={{ marginRight: '8px' }}
              />
            </>
          )}
        </div>
        {title && (
          <Typography
            variant="label"
            weight="regular"
            style={{
              display: 'flex',
              position: 'absolute',
              top: '-8px',
              left: '8px',
              paddingLeft: '4px',
              paddingRight: '4px',
              backgroundColor: 'rgb(38,41,53)',
              color: 'rgba(255, 255, 255, 0.4)',
            }}
          >
            {title}
          </Typography>
        )}
        {isOpen && (
          <div
            className={`${defaultClassName}-list`}
            style={{
              top: size === 'small' ? '40px' : '48px',
              minWidth: type === 'context' ? '100px' : '100%',
            }}
          >
            {search && (
              <div className="dropdown-search-container-wrapper">
                <div className="dropdown-search-container">
                  <img src={searchIcon} style={{ marginLeft: '4px' }} alt="" />
                  <input
                    type="text"
                    placeholder={searchPlaceHolder}
                    value={searchInput}
                    onChange={(e) =>
                      onChangeSearchInput && onChangeSearchInput(e.target.value)
                    }
                    style={{
                      width: '100%',
                      marginLeft: '-4px',
                      color: 'rgba(255, 255, 255, 0.40))',
                      fontSize: '14px',
                      fontWeight: '400',
                      padding: '4px',
                      backgroundColor: 'transparent',
                      borderRadius: '0px',
                      borderWidth: '0px',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>
            )}
            <div className={`${defaultClassName}-list-wrapper`}>
              {filteredOptions && filteredOptions.length > 0 ? (
                filteredOptions.map((item, index) => (
                  <div
                    key={`${defaultClassName}-list-item-${item}__${index}`}
                    className={`${defaultClassName}-list-item`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOptionClick(index);
                    }}
                  >
                    <Typography
                      variant="b1"
                      weight="regular"
                      style={{
                        color: 'var(--text-ui-text-secondary)',
                      }}
                    >
                      {item}
                    </Typography>
                    {index === selectedOptionIndex && (
                      <img
                        className="dropdown-check-icon"
                        src={checkWhiteSvg}
                        alt=""
                      />
                    )}
                  </div>
                ))
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '20px',
                    marginBottom: '8px',
                    alignContent: 'center',
                    paddingLeft: '12px',
                  }}
                >
                  <Typography
                    variant="b1"
                    weight="regular"
                    style={{
                      paddingBottom: '4px',
                      color: 'var(--text-ui-text-secondary)',
                    }}
                  >
                    {/* {t('component.no_data')} */}
                    No Data
                  </Typography>
                </div>
              )}
            </div>
            {/* {type === 'check' && !search && (
            <div
              className="custom-scrollbar"
              ref={scrollBarRef}
              style={{ marginTop: search ? '60px' : '' }}
            />
          )} */}
          </div>
        )}
      </div>
      {type === 'default' && !isOpen && helperText && (
        <Typography
          variant="label"
          weight="regular"
          style={{
            position: 'absolute',
            top: size === 'small' ? '36px' : '44px',
            color: isOpen
              ? '#538BFF'
              : isError
                ? 'red'
                : disabled
                  ? 'rgba(255, 255, 255, 0.2)'
                  : 'var(--text-ui-text-secondary)',
            whiteSpace: 'nowrap',
            marginLeft: '4px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '100%',
          }}
        >
          {helperText}
        </Typography>
      )}
    </div>
  );
};

export default Dropdown;
