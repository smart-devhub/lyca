import React from 'react';
//@import styles
import './index.css';

const Checkbox = ({
  id,
  icon,
  name,
  value,
  error,
  register = () => {},
  onChange,
  placeholder,
  checked,
  label = '',
  type = 'text',
  className = '',
  labelClasses = '',
  disable = false,
  height = '38px',
  autoComplete = 'off',
  maxLength = 50,
  required = false,
  alphabet = false,
  alphanumeric = false,
  ...props
}) => {
  const handleInputChange = e => {
    if (onChange) onChange(e);
  };
  return (
    <div className={`${className}`}>
      <div className='flex items-center'>
        <input
          {...props}
          id={id}
          type={'checkbox'}
          name={name}
          value={value}
          checked={checked}
          disabled={disable}
          onChange={handleInputChange}
          {...register(name)}
        />
        <label
          htmlFor={id}
          className={`ml-2 block  text-[12px] font-extrabold text-dark ${
            required ? "after:orange after:ml-1 after:content-['*']" : ''
          } ${labelClasses} ${disable ? '!cursor-not-allowed' : 'cursor-pointer'}`}
        >
          {label}
        </label>
      </div>
      {error && <p className='mt-2 text-sm text-red-600'>{error}</p>}
    </div>
  );
};

export default Checkbox;
