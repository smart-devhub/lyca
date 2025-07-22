import React, { useState } from 'react';
// @import components
import SVG from 'components/renderSvg';
// @import media
import leftShift from 'media/svgs/leftShift.svg';
import rightShift from 'media/svgs/rightShift.svg';

const getLabel = item => {
  return item?.name || item.rightName || item.label || '';
};

const ShiftList = ({
  left,
  right,
  setRight,
  setLeft,
  label = '',
  error = '',
  required = false,
}) => {
  const [selectedLeftItems, setSelectedLeftItems] = useState([]);
  const [selectedRightItems, setSelectedRightItems] = useState([]);

  const handleLeftSelect = item => {
    if (selectedLeftItems?.includes(item)) {
      setSelectedLeftItems(selectedLeftItems?.filter(x => x !== item));
    } else {
      setSelectedLeftItems([...selectedLeftItems, item]);
    }
  };

  const handleRightSelect = item => {
    if (selectedRightItems?.includes(item)) {
      setSelectedRightItems(selectedRightItems?.filter(x => x !== item));
    } else {
      setSelectedRightItems([...selectedRightItems, item]);
    }
  };

  const handleMove = direction => {
    if (direction === 'right' && selectedLeftItems.length > 0) {
      setRight([...right, ...selectedLeftItems]);
      setLeft(left?.filter(item => !selectedLeftItems?.includes(item)));
      setSelectedLeftItems([]);
    } else if (direction === 'left' && selectedRightItems.length > 0) {
      setLeft([...left, ...selectedRightItems]);
      setRight(right?.filter(item => !selectedRightItems.includes(item)));
      setSelectedRightItems([]);
    }
  };

  return (
    <>
      <label
        htmlFor=''
        className={`mb-2 block text-[12px] font-extrabold ${required ? "after:ml-1 after:text-red-500 after:content-['*']" : ''}`}
      >
        {label}
      </label>
      <div className='flex h-auto w-full rounded-[12px] border border-grayMedium p-4'>
        <div className='max-h-[250px] min-h-[200px] w-2/5 overflow-y-auto '>
          {left?.map(item => (
            <button
              type='button'
              key={item?.id}
              title={getLabel(item)} // Tooltip added here
              className={`block truncate rounded-md px-3 py-2 text-[16px] font-normal ${
                selectedLeftItems?.includes(item)
                  ? 'bg-primary text-orange'
                  : 'text-primary bg-inherit'
              }`}
              onClick={() => handleLeftSelect(item)}
            >
              {getLabel(item)}
            </button>
          ))}
        </div>
        <div className='flex w-1/5 flex-col items-center justify-center gap-y-2'>
          <span onClick={() => handleMove('left')}>
            <SVG icon={leftShift} className='cursor-pointer' />
          </span>
          <span onClick={() => handleMove('right')}>
            <SVG icon={rightShift} className='cursor-pointer' />
          </span>
        </div>
        <div className='max-h-[250px] min-h-[200px] w-2/5 overflow-y-auto'>
          {right?.map(item => (
            <button
              type='button'
              key={item?.rightId}
              title={getLabel(item)}
              className={`block truncate text-[16px] ${
                selectedRightItems?.includes(item)
                  ? 'bg-primary rounded-md px-3 py-2 text-orange'
                  : 'rounded-md bg-inherit px-3 py-2'
              }`}
              onClick={() => handleRightSelect(item)}
            >
              {getLabel(item)}
            </button>
          ))}
        </div>
      </div>
      {error && <p className='mt-2 text-[12px] text-red-600'>{error}</p>}
    </>
  );
};

export default ShiftList;
