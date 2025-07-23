import React from 'react';
import PlanCard from './component/PlanCard';
import UsageCard from './component/UsageCard';
import TransferNumber from './component/TransferNumber';
import Balance from './component/Balance';
const planData = {
  text: 'Your plan',
  title: 'Smart SIM 25',
  expiryText: 'Expires on',
  expiryDate: '20th March 2025',
};

const Home = () => {
  return (
    <div className='flex flex-col gap-3'>
      <section className='flex flex-col gap-4 lg:flex-row'>
        <div className='w-full lg:w-7/12'>
          <PlanCard data={planData} />
        </div>

        <div className='w-full lg:w-5/12'>
          <UsageCard />
        </div>
      </section>
      <section>
        <TransferNumber />
      </section>
      <section>
        <Balance />
      </section>
    </div>
  );
};

export default Home;
