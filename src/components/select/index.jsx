import React, { useEffect, useState } from 'react';
// @import components
import SVG from 'components/renderSvg';
// @import hooks
import useOutsideClick from 'hooks/useOutsideClick';
// @import media
import downIcon from 'media/svgs/dropdown.svg';

const Select = ({
  name,
  label,
  error,
  value,
  onChange,
  disable = false,
  required = false,
  className = '',
  labelClasses = '',
  selectClasses = '',
  placeholder = 'Please Select',
  inputWrapper = '',
  options = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const closeDropdown = () => setIsOpen(false);

  const handleSelect = obj => {
    setSelectedValue(obj);
    setIsOpen(false);
    if (onChange) onChange(obj?.value);
  };

  const ref = useOutsideClick(closeDropdown);

  useEffect(() => {
    if (value) {
      const selctectOption = options?.find(
        el => String(el?.value) === String(value)
      );

      setSelectedValue(selctectOption);
    } else {
      setSelectedValue({ value: '', label: '' });
    }
  }, [value, options?.length]);

  return (
    <div className={`${className}`}>
      {label && (
        <label
          className={`mb-2 block text-[12px] font-extrabold ${labelClasses} ${
            required ? "after:ml-1 after:text-red-500 after:content-['*']" : ''
          }`}
        >
          {label}
        </label>
      )}
      <div className={`relative ${disable ? 'opacity-50' : ''}`} ref={ref}>
        <div
          className={`flex h-[40px]  items-center justify-between rounded-[6px] border border-grayMedium bg-white px-3 py-[13px] ${selectClasses} ${inputWrapper} ${
            disable ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
          onClick={() => !disable && setIsOpen(!isOpen)}
        >
          <span
            className={`${selectedValue ? 'text-[14px]' : 'text-xs font-normal text-darkGray'}`}
          >
            {selectedValue?.label || placeholder}
          </span>

          <SVG icon={downIcon} />
        </div>
        {isOpen && (
          <ul className='absolute z-10 mt-2 max-h-48 w-full overflow-auto rounded-[12px] border border-grayMedium bg-white shadow-lg'>
            {options?.length ? (
              options.map(option => (
                <li
                  key={option.value}
                  onClick={() => handleSelect(option)}
                  className={`hover:bg-gray-100 cursor-pointer px-3 py-2 ${option.value === selectedValue?.value ? 'bg-orange text-white' : ''}`}
                >
                  {option.label}
                </li>
              ))
            ) : (
              <li className='hover:bg-gray-100 cursor-pointer px-3 py-2'>
                Not found
              </li>
            )}
          </ul>
        )}
      </div>
      {/* Error message */}
      {error && <p className='mt-1 text-[12px] text-red-600'>{error}</p>}
    </div>
  );
};

export default Select;
