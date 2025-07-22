import React, { forwardRef } from 'react';
// @import dependencies
import DatePicker from 'react-datepicker';
// @import styles
import 'react-datepicker/dist/react-datepicker.css';
import styles from './index.module.scss';

const defaultIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 48 48'
  >
    <mask id='ipSApplication0'>
      <g fill='none' stroke='#fff' strokeLinejoin='round' strokeWidth='4'>
        <path strokeLinecap='round' d='M40.04 22v20h-32V22'></path>
        <path
          fill='#fff'
          d='M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z'
        ></path>
      </g>
    </mask>
    <path
      fill='currentColor'
      d='M0 0h48v48H0z'
      mask='url(#ipSApplication0)'
    ></path>
  </svg>
);

const ExampleCustomInput = forwardRef(
  ({ value, onClick, className, placeholder }, ref) => (
    <button type='button' className={className} onClick={onClick} ref={ref}>
      <span
        className={`${value ? 'text-[14px]' : 'text-xs font-normal text-darkGray'}`}
      >
        {value || placeholder}
      </span>
    </button>
  )
);

ExampleCustomInput.displayName = 'custom date input';

function MyDatePicker({
  name,
  value,
  label,
  onClear,
  register = () => {},
  onChange,
  placeholder,
  minDate,
  maxDate,
  className = '',
  required = false,
  disable = false,
  height = 'h-[40px]',
  autoComplete = 'off',
  error = '',
  icon = defaultIcon,
  dateFormat = 'dd/MM/yyyy',
  ...props
}) {
  const handleSelect = date => {
    if (onChange) onChange(date);
  };

  return (
    <div className={`w-full ${styles.datePickerWrapper} ${className}`}>
      {label && (
        <label
          className={`mb-[8px] block text-[12px] font-extrabold text-dark ${
            required ? "after:ml-1 after:text-red-500 after:content-['*']" : ''
          }`}
        >
          {label}
        </label>
      )}
      <div className={`relative flex size-full items-center justify-center`}>
        <DatePicker
          placeholderText={placeholder}
          wrapperClassName={`${height} w-full`}
          calendarIconClassName='!pt-[12px]'
          selected={value}
          onChange={handleSelect}
          icon={icon}
          maxDate={maxDate}
          minDate={minDate}
          dateFormat={dateFormat}
          yearDropdownItemNumber={15}
          showIcon
          showYearDropdown
          showMonthDropdown
          isClearable={false}
          customInput={
            <ExampleCustomInput
              className={`${height} focus:placeholder:text-gray-500 w-full flex-1 appearance-none rounded-[6px] border border-grayMedium bg-transparent bg-none px-3 !pl-9 text-left !text-[14px] outline-none placeholder:text-xs placeholder:font-normal placeholder:text-darkGray disabled:cursor-not-allowed disabled:opacity-30`}
            />
          }
        />
      </div>
      {error ? <p className='mt-2 text-[12px] text-red-600'>{error}</p> : null}
    </div>
  );
}

export default MyDatePicker;
