import React, { useState } from 'react';
//@import components
import SVG from 'components/renderSvg';
//@import styles
import styles from './index.module.scss';
//@import media
import EyeIcon from 'media/svgs/eye-icon.svg';
import EyeLineIcon from 'media/svgs/eye-line-icon.svg';

const InputField = ({
  icon,
  name,
  value,
  label,
  error,
  register = () => {},
  onChange,
  onInput,
  onBlur,
  placeholder,
  type = 'text',
  className = '',
  disable = false,
  height = 'h-[40px]',
  autoComplete = 'off',
  inputWrapper = '',
  maxLength = 50,
  isPhone = false,
  required = false,
  alphabet = false,
  alphanumeric = false,
  isMsisdn = false,
  ...props
}) => {
  const [isShowPass, setIsShowPass] = useState(false);

  const handleInputChange = e => {
    if (onInput) onInput(e);

    e.target.value = e.target.value
      .replace(/\s{2,}/g, ' ') // Replace multiple spaces with a single space
      .trimStart();

    if (alphabet) {
      e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '').trimStart();
    }
    if (alphanumeric) {
      e.target.value = e.target.value
        .replace(/[^a-zA-Z0-9\s]/g, '')
        .trimStart();
    }
    if (isMsisdn) {
      e.target.value = e.target.value.replace(/[^0-9,]/g, '').trimStart();
    }
  };

  const handleNumberInput = e => {
    if (onInput) onInput(e);

    if (isPhone) {
      let value = e.target.value.replace(/\D/g, '');

      if (value.startsWith('92')) {
        value = '0' + value.slice(2);
      }

      if (value.length === 1 && value !== '0') {
        value = '03';
      } else if (
        value.length > 1 &&
        !value.startsWith('03') &&
        value.startsWith('0')
      ) {
        value = '03' + value.slice(1);
      }
      if (value.length > 11) {
        value = value.slice(0, 11); // Truncate to 11 digits
      }

      e.target.value = value;
    } else {
      e.target.value = e.target.value.replace(/\D/g, '');
    }
  };

  const handelOnBlur = e => {
    onBlur && onBlur(e);
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          className={`mb-[8px] block text-[12px] font-extrabold text-dark ${
            required ? "after:ml-1 after:text-red-500 after:content-['*']" : ''
          }`}
        >
          {label}
        </label>
      )}
      <div
        className={`flex items-center rounded-[6px] border border-grayMedium px-3 ${inputWrapper} ${disable ? 'bg-lightGray' : ''}`}
      >
        {icon && <span className='mr-2'>{icon}</span>}
        {type === 'number' ? (
          <input
            {...props}
            type='text'
            value={value}
            disabled={disable}
            onChange={onChange}
            maxLength={maxLength}
            {...register(name)}
            placeholder={placeholder}
            autoComplete={type === 'password' ? 'new-password' : autoComplete}
            className={` ${styles.numberInput} focus:placeholder:text-gray-500 flex-1 appearance-none border-none bg-transparent bg-none outline-none placeholder:text-xs placeholder:font-normal placeholder:text-darkGray disabled:cursor-not-allowed disabled:opacity-30  ${height}`}
            style={{
              MozAppearance: 'textfield',
              backgroundColor: 'transparent',
            }}
            onInput={handleNumberInput}
          />
        ) : (
          <div className='flex w-full items-center justify-between'>
            <input
              {...props}
              type={isShowPass ? 'text' : type}
              value={value}
              disabled={disable}
              onChange={onChange}
              maxLength={maxLength}
              {...register(name)}
              placeholder={placeholder}
              autoComplete={type === 'password' ? 'new-password' : autoComplete}
              className={` ${styles.numberInput} focus:placeholder:text-gray-500 flex-1 appearance-none border-none bg-transparent bg-none outline-none placeholder:text-xs placeholder:font-normal placeholder:text-darkGray disabled:cursor-not-allowed disabled:opacity-30  ${height}`}
              style={{
                MozAppearance: 'textfield',
                backgroundColor: 'transparent',
              }}
              onInput={e => handleInputChange(e)}
              onBlur={handelOnBlur}
            />
            {type === 'password' ? (
              <button
                type='button'
                onClick={() => setIsShowPass(prev => !prev)}
              >
                <SVG
                  icon={isShowPass ? EyeLineIcon : EyeIcon}
                  width='18px'
                  height='18px'
                  className='pl-2'
                />
              </button>
            ) : null}
          </div>
        )}
      </div>
      {error && <p className='mt-2 text-[12px] text-red-600'>{error}</p>}
    </div>
  );
};

export default InputField;
