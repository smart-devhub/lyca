import React from 'react';

const ProgressBar = ({ value = 0 }) => {
  return (
    <div className='relative h-[16px] w-full overflow-hidden rounded-full bg-light_primary'>
      {/* Filled Progress */}
      <div
        className='h-full rounded-full bg-blue-200 transition-all duration-300'
        style={{ width: `${value}%` }}
      ></div>

      {/* Progress End Circle */}
      <div
        className='absolute  top-1/2 size-[8px] -translate-y-1/2 rounded-full bg-[#1D1F36]'
        style={{ left: `calc(${value}% - 12px)` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
