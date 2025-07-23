import Button from 'components/button';
import React from 'react';

const PlanCard = ({ data }) => {
  const { title, text, expiryText, expiryDate } = data;
  return (
    <div className='flex w-full flex-col gap-4 rounded-[20px] bg-primary p-8 text-stone'>
      <div className='flex flex-col gap-2'>
        <h5 className='text-[18px]'>{text}</h5>
        <h5 className='text-[30px] font-medium'>{title}</h5>
      </div>
      <div className='flex justify-center border-b border-stone py-40'>
        diagram
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-2'>
          <h5 className='text-[18px]'>{expiryText}</h5>
          <h5 className='text-[18px]'>{expiryDate}</h5>
        </div>
        <div>
          <Button
            variant='outlined'
            text='Renew your plan'
            className='h-[48px] border border-stone'
          />
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
