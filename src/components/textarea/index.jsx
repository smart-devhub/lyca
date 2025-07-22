// @import components

const GSM_CHARSET_7BIT = 0;
const GSM_CHARSET_UNICODE = 1;

const getCharset = content => {
  return /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/.test(content)
    ? GSM_CHARSET_UNICODE
    : GSM_CHARSET_7BIT;
};

//char is for urdu default
const getCharCount = (content, char) => {
  const charset = char || getCharset(content);
  const txtMsgLgt = content?.length || 0;
  let count = 0,
    remainingChars = 0,
    totalChars = 0;

  if (charset === GSM_CHARSET_7BIT) {
    const segmentSize = txtMsgLgt <= 160 ? 160 : 153;
    count = Math.max(1, Math.ceil(txtMsgLgt / segmentSize));
    totalChars = segmentSize * count;
  } else {
    const segmentSize = txtMsgLgt <= 70 ? 70 : 67;
    count = Math.max(1, Math.ceil(txtMsgLgt / segmentSize));
    totalChars = segmentSize * count;
  }

  remainingChars = totalChars - txtMsgLgt;
  return { remainingChars, charset, count };
};

function Textarea({
  icon,
  name,
  value,
  label,
  error,
  register = () => {},
  onChange,
  placeholder = '',
  className = '',
  disable = false,
  height = '90px',
  required = false,
  alphabet = false,
  alphanumeric = false,
  isShowCounter = false,
  isShowKeyboard = false,
  setSmsLanguage = () => {},
  ...props
}) {
  const handleInputChange = e => {
    let inputValue = e.target.value
      .replace(/\s{2,}/g, ' ') // Replace multiple spaces with a single space
      .trimStart();

    if (alphabet) {
      inputValue = inputValue.replace(/[^a-zA-Z\s]/g, ''); // Only letters and spaces
    }
    if (alphanumeric) {
      inputValue = inputValue.replace(/[^a-zA-Z0-9\s]/g, ''); // Letters, numbers, and spaces
    }
    e.target.value = inputValue;
    if (onChange) onChange(e); // Trigger onChange callback
  };

  const { remainingChars, charset, count } = getCharCount(value);
  setSmsLanguage(charset === GSM_CHARSET_7BIT ? 'English' : 'Urdu');

  return (
    <div className={`w-full ${className}`}>
      {label ? (
        <label
          className={`text-gray-700 mb-2 block text-[12px] font-extrabold ${
            required ? "after:ml-1 after:text-red-500 after:content-['*']" : ''
          }`}
        >
          {label}
        </label>
      ) : null}
      <div className='relative flex items-start rounded-[6px] border border-grayMedium p-[16px]'>
        {icon ? <span className='mr-2 mt-1'>{icon}</span> : null}
        <textarea
          {...props}
          name={name}
          value={value}
          disabled={disable}
          onChange={handleInputChange}
          {...register(name)}
          placeholder={placeholder}
          className={`focus:placeholder:text-gray-500 w-full resize-none bg-transparent outline-none placeholder:text-xs placeholder:font-normal placeholder:text-darkGray disabled:cursor-not-allowed disabled:opacity-50 ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
          style={{ height }}
        />
      </div>
      {error ? <p className='mt-2 text-[12px] text-red-600'>{error}</p> : null}

      {isShowCounter ? (
        <p className='text-[12px] font-extrabold'>
          You have{' '}
          <span className='text-base font-extrabold text-orange'>
            {remainingChars}
          </span>{' '}
          remaining characters in message
          <span className='text-base font-extrabold text-orange'>
            {' '}
            {count}
          </span>{' '}
        </p>
      ) : null}

      {isShowCounter ? (
        <p className='text-xs font-normal'>
          For English, text message has a limit of 160 characters and for Urdu
          messages, the character limit is up to 70 characters only.
        </p>
      ) : null}
    </div>
  );
}

export default Textarea;
