import React, { useEffect, useState } from 'react';
//@import components
import InputField from 'components/inputField';
//@import media
import refreshIcon from 'media/svgs/refresh-icon.svg';
import { getRandomInRange } from 'libs/crypto';

function ReCaptcha({ validateCaptchaRef }) {
  const [captchaText, setCaptchaText] = useState('');
  const [inputText, setInputText] = useState('');
  const [error, setError] = useState('');

  const generateCaptchaText = () => {
    const chars =
      'abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789';
    let text = '';
    for (let i = 0; i < 6; i++) {
      text += chars[getRandomInRange(0, chars.length - 1)];
    }

    return text;
  };

  const onChange = e => {
    const { value } = e.target;
    let error = '';

    if (!value) {
      error = 'CAPTCHA is required';
    }
    setInputText(value);
    setError(error);
  };

  const handleRefresh = () => {
    setCaptchaText(generateCaptchaText());
    setInputText('');
    setError(false);
  };

  useEffect(() => {
    setCaptchaText(generateCaptchaText());
  }, []);

  validateCaptchaRef.current = () => {
    if (!inputText) {
      setError('CAPTCHA is required');
      return { captchaFlag: false, isFilled: false };
    }

    return {
      captchaFlag: inputText === captchaText,
      isFilled: true,
    };
  };
  return (
    <div>
      <div className='my-[10px] flex w-full items-center justify-center gap-2 rounded-md 2xl:my-5'>
        <div className='flex w-40 items-center justify-between rounded-lg bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] px-2 py-1 shadow-md'>
          {captchaText?.split('')?.map((word, index) => {
            const letterClass =
              index % 2 === 0
                ? 'rotate-12 text-[20px] text-oliveGreen '
                : 'text-[18px] text-orange';

            return (
              <span
                key={index}
                onCopy={e => e.preventDefault()}
                onMouseDown={e => e.preventDefault()}
                className={`flex select-none font-bold ${letterClass}`}
              >
                {word}
              </span>
            );
          })}
        </div>
        <button onClick={handleRefresh} type='button'>
          <img
            src={refreshIcon}
            className='h-[20px] w-[18px]'
            alt='refresh captcha'
          />
        </button>
      </div>

      <InputField
        type='text'
        placeholder='Enter Captcha'
        value={inputText}
        maxLength={6}
        onChange={onChange}
        error={error}
      />
    </div>
  );
}

export default ReCaptcha;
