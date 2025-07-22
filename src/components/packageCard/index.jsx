import React from 'react';
//@ import components
import Circularchart from 'components/circularChart';

const PackageCard = ({ data, offNet, onNet, smsConsumed }) => {
  const accumalitiveUsage =
    ((data?.dueBillExclTax + data?.taxAmount) * 100) / data?.securityDeposit;

  const roundedUsage = Math.max(0, Math.round(accumalitiveUsage));

  return (
    <div className='cardWrapper flex grow flex-col overflow-hidden rounded-[15px] bg-white shadow-md'>
      <div className='cardHead border-b border-b-grayMedium bg-gray p-[15px] md:p-[30px]'>
        <h3 className='text-[18px] font-extrabold capitalize text-dark md:text-[22px]'>
          SMS Details
        </h3>
      </div>
      <div className='cardBody'>
        {smsConsumed && (
          <div className='flex justify-between border-b border-extraLightGray px-[15px] py-[18px] md:px-[30px]'>
            <label className='text-[16px] font-extrabold capitalize'>
              SMS Consumed
              <span className='text-[12px] font-normal text-darkGray'>
                /month
              </span>
              :
            </label>
            <h4 className='text-[16px] font-bold capitalize text-darkGray'>
              {smsConsumed} SMS
            </h4>
          </div>
        )}
        {offNet && (
          <div className='flex justify-between border-b border-extraLightGray  px-[15px] py-[18px] md:px-[30px]'>
            <label className='text-[16px] font-extrabold capitalize'>
              Est. Remaining Off-Net:
            </label>
            <h4 className='text-[16px] font-bold capitalize text-darkGray'>
              {offNet} SMS
            </h4>
          </div>
        )}
        {onNet && (
          <div className='flex justify-between border-b border-extraLightGray px-[15px] py-[18px] md:px-[30px]'>
            <label className='text-[16px] font-extrabold capitalize'>
              Est. Remaining On-Net:
            </label>
            <h4 className='text-[16px] font-bold capitalize text-darkGray'>
              {onNet} SMS
            </h4>
          </div>
        )}
      </div>
      <div className='cardFooter flex h-full flex-col justify-center'>
        <Circularchart
          rawData={[
            {
              value: roundedUsage,
              name: '',
              title: {
                offsetCenter: ['0%', '0%'],
              },
              detail: {
                valueAnimation: true,
                offsetCenter: ['0%', '0%'],
              },
            },
          ]}
          minValue={0}
          maxValue={100}
        />
      </div>
    </div>
  );
};

export default PackageCard;
