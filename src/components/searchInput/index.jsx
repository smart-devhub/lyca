import React from 'react';
//@import components
import SVG from 'components/renderSvg';
//@import media
import searchIcon from 'media/svgs/search.svg';
import redCross from 'media/svgs/crossicon.svg';

const SearchBar = ({
  name,
  value,
  onChange,
  placeholder = 'Search here',
  type = 'text',
  className = '',
  disable = false,
  height = 'auto',
  maxLength = '40',
  handleClear,
  onSubmit,
  isPhone = false,
  ...props
}) => {
  const handleNumberInput = e => {
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

  return (
    <form onSubmit={onSubmit} className={`${className}`}>
      <div
        style={{ height }}
        className='flex w-full items-center overflow-hidden rounded-[6px] border border-grayMedium px-1'
      >
        <button
          className={`${value ? 'order-1' : 'order-3'} p-2`}
          type='submit'
          onClick={onSubmit}
        >
          <SVG icon={searchIcon} />
        </button>

        <input
          type={type}
          value={value}
          disabled={disable}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          onInput={handleNumberInput}
          style={{ backgroundColor: 'transparent' }}
          className={`order-2 min-w-0 flex-1 border-none bg-transparent bg-none outline-none ${
            value ? 'pl-0' : 'pl-2'
          } py-2`}
          {...props}
        />
        {value && (
          <button
            className='text-md order-3 p-2 text-red-500'
            onClick={handleClear}
            type='button'
          >
            <SVG icon={redCross} className='size-6 fill-[#8F919B]' fullSize />
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
