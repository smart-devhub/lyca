import React from 'react';
//@ import media
import alert from 'media/pngs/alert.png';

const SecurityAlert = () => {
  return (
    <div className='overflow-hidden rounded-[16px] bg-gradient-to-r from-[#F58220] to-[#F8513B] p-[20px] shadow-md'>
      <div className='flex flex-col-reverse justify-between gap-[20px] md:flex-row md:gap-0'>
        <div className='flex flex-col gap-[20px]'>
          <h4 className='text-[16px] font-extrabold text-white'>Alert</h4>
          <p className='max-w-[496px] text-[14px] font-normal text-white'>
            Alert To enhance security of BSMS services as per PTA
            recommendations password for API & BSMS - portal will expire after
            90 days of password.
          </p>
        </div>
        <div className='relative md:bottom-[-30px]'>
          <img src={alert} alt='alert' />
        </div>
      </div>
    </div>
  );
};

export default SecurityAlert;
