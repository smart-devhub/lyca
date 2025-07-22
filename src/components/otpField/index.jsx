import React, { useEffect, useState } from 'react';
// @import dependencies
import OTPInput from 'react-otp-input';
// @import services
import { handleGenerateOtp } from 'data/commonService';

const OtpField = ({
  icon,
  value,
  label,
  error,
  onChange,
  setValue,
  payload = {},
  numInputs = 6,
  className = '',
  height = 'h-[40px]',
  required = false,
}) => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);

  const handleResend = async () => {
    setTimeLeft(60);
    setCanResend(false);
    setValue && setValue('otp', '');
    handleGenerateOtp({ payload });
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

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
      <div>
        {icon && <span className='mr-2'>{icon}</span>}
        <OTPInput
          value={value}
          inputType={'number'}
          onChange={onChange}
          numInputs={numInputs}
          renderSeparator={<span className='mx-2' />}
          renderInput={props => <input {...props} inputMode='numeric' />}
          inputStyle={`focus:placeholder:text-gray-500 flex-1 appearance-none border border-grayMedium bg-transparent rounded-[6px] bg-none focus:outline-none outline-none placeholder:text-xs placeholder:font-normal placeholder:text-darkGray disabled:cursor-not-allowed disabled:opacity-30 ${height}`}
        />
        <p className='mt-2 block text-[12px] font-normal leading-[14px] text-lightDark'>
          Didn’t receive an OTP?
        </p>
        <div>
          {!canResend ? (
            <p className='mt-2 text-[12px] font-normal text-lightDark'>
              Resend in {timeLeft}s
            </p>
          ) : (
            <button
              type='button'
              onClick={handleResend}
              className='mt-2 text-[12px] font-normal text-orange underline'
            >
              Resend Code
            </button>
          )}
        </div>
      </div>
      {error && (
        <p className='mt-2 text-[12px] text-red-600'>
          {error ? error : 'error'}
        </p>
      )}
    </div>
  );
};

export default OtpField;
