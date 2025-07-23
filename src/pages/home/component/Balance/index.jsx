import Button from 'components/button';
import React from 'react';
import { Link } from 'react-router-dom';

const Balance = () => {
  return (
    <div className='flex  items-center gap-10 rounded-[20px] bg-stone px-8 py-10'>
      <div className='flex w-1/2 flex-col gap-2'>
        <h5 className='text-[20px] font-bold text-primary'>Credit balance</h5>
        <h5 className='text-[40px] font-medium  text-primary'>£0.00</h5>
      </div>
      <div className='flex w-1/2 flex-col gap-2'>
        <Button
          text='Tranfer Number'
          variant='outline'
          className='border border-primary bg-white'
        />
        <div className='flex w-full items-center justify-center gap-2'>
          <h3>Have a voucher?</h3>
          <Link className='  font-medium underline'>Redeem Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Balance;
