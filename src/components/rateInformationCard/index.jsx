import React from 'react';

const RateinformationCard = ({
  iconSrc,
  bgColor,
  primaryLabel,
  primaryValue,
  secondaryLabel,
  secondaryValue,
  isPkr = false,
  isIcon = false,
}) => {
  return (
    <>
      {isIcon ? (
        <div
          className={`${bgColor} flex min-h-[187px] grow flex-col items-start gap-[20px] rounded-[15px] px-[10px] py-[35px] shadow-md lg:px-[20px]`}
        >
          <div className='flex w-full grow flex-col gap-[30px]'>
            <img
              alt='img'
              src={iconSrc}
              className='max-h-[33px] max-w-[33px]'
            />
            <label className='line-clamp-1 text-[16px] font-extrabold capitalize text-white lg:text-[22px]'>
              {primaryLabel} {isPkr && `PKR`}
            </label>
            <h5 className='text-[14px] font-normal text-white lg:text-[16px]'>
              {primaryValue}
            </h5>
          </div>
        </div>
      ) : (
        <div
          className={`${bgColor} flex min-h-[187px] grow flex-col items-start gap-[20px] rounded-[15px] px-[10px] py-[35px] shadow-md lg:px-[20px]`}
        >
          <div className='flex w-full flex-col'>
            <label className='line-clamp-1 text-[16px] font-extrabold capitalize text-white lg:text-[22px]'>
              {primaryLabel}
            </label>
            <h5 className='text-[14px] font-normal text-white lg:text-[16px]'>
              {primaryValue} PKR
            </h5>
          </div>
          <div className='flex w-full flex-col'>
            <label className='line-clamp-1 text-[16px] font-extrabold capitalize text-white lg:text-[22px]'>
              {secondaryLabel}
            </label>
            <h5 className='text-[14px] font-normal text-white lg:text-[16px]'>
              {secondaryValue} PKR
            </h5>
          </div>
        </div>
      )}
    </>
  );
};

export default RateinformationCard;
