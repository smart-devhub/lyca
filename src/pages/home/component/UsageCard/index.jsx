import ProgressBar from 'components/progressbar';
import React from 'react';

const UsageCard = () => {
  const data = {
    countryText: 'UK minutes',
    countryMinutes: 100,
    countryMinutesStatus: 'Unlimited',
    internationalMinutes: 50,
    internationaltext: 'International minutes',
    internationalMinutesLeft: '10 left of 100 minutes',
    textValue: 30,
    textTitle: 'Texts',
    textLeft: '10 left of 100 minutes',
  };
  return (
    <div className='flex w-full flex-col  gap-4 rounded-[20px] bg-primary p-8 text-stone'>
      <div className='mb-20'>
        <h4 className='text-[30px] font-medium'>Usage</h4>
      </div>
      <div className='mb-20 flex flex-col gap-6'>
        <Bar
          icon={null}
          title={data?.countryText}
          status={data.countryMinutesStatus}
          value={data.countryMinutes}
        />
        <Bar
          icon={null}
          title={data?.internationaltext}
          value={data.internationalMinutes}
          desc={data.internationalMinutesLeft}
        />
        <Bar
          icon={null}
          title={data?.textTitle}
          value={data.textValue}
          desc={data.textLeft}
        />
      </div>

      <h5 className='text-[16px] font-medium text-white'>
        View your full usage and history
      </h5>
    </div>
  );
};

export default UsageCard;

const Bar = ({ icon, title, status, value, desc }) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-2'>
          {icon}
          <h5 className='text-[18px]'>{title}</h5>
        </div>
        {status ? <h5 className='text-[18px]'>{status}</h5> : null}
      </div>
      <ProgressBar value={value} />
      {desc ? (
        <h5 className='text-[14px] text-light_secondary'>{desc}</h5>
      ) : null}
    </div>
  );
};
