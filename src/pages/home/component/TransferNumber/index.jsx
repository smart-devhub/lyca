import Button from 'components/button';
import React from 'react';

const TransferNumber = () => {
  return (
    <div className='flex  items-center gap-10 rounded-[20px] bg-coral px-8 py-10'>
      <div className='flex w-3/5 flex-col gap-2'>
        <h5 className='text-[20px] font-bold text-primary'>
          Transfer your number
        </h5>
        <h5 className='text-[18px]  text-primary'>
          Quickly transfer your number to Lyca. All you need is a PAC code from
          your existing provider.
        </h5>
      </div>
      <div className='flex w-2/5 flex-col gap-2'>
        <Button
          text='Tranfer Number'
          variant='outline'
          className='border border-primary bg-white'
        />
        <Button
          text='I am happy with my number'
          variant='outline'
          className='border border-primary bg-white'
        />
      </div>
    </div>
  );
};

export default TransferNumber;
