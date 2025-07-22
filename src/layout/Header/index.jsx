import React from 'react';
//@import dependencies
import ufone from 'media/pngs/ufone.png';
// @import customHooks
import useWindowSize from 'hooks/useWindowSize';
import Navigation from 'components/navigation';
import Button from 'components/button';
import DropdownButton from 'components/dropdownBtn';

const Header = () => {
  const { width } = useWindowSize();

  console.log(width);

  const handleClickLink = item => {
    console.log(item);
  };

  return (
    <div className={`mx-4 my-5 rounded-[20px] bg-primary`}>
      <TopSection handleClickLink={handleClickLink} />
      <BottomSection />
    </div>
  );
};

export default Header;

const TopSection = ({ navItems, handleClickLink }) => {
  const lang = [
    {
      label: 'EN',
      dropdown: [
        { label: 'en', href: '' },
        { label: 'ur', href: '' },
        { label: 'fr', href: '' },
        { label: 'ru', href: '' },
      ],
    },
  ];

  const lycaItems = [
    {
      label: 'Join Lyca',
      dropdown: [
        { label: 'Personal Plans', href: '/personal' },
        { label: 'Business Plans', href: '/business' },
        { label: 'Family Plans', href: '/family' },
        { label: 'Student Discount', href: '/student' },
      ],
    },
  ];

  const planItems = [
    {
      label: 'Plans',
      dropdown: [
        { label: 'Personal Plans', href: '/personal' },
        { label: 'Business Plans', href: '/business' },
        { label: 'Family Plans', href: '/family' },
        { label: 'Student Discount', href: '/student' },
      ],
    },
  ];

  const supportItems = [
    {
      label: 'Support',
      dropdown: [
        { label: 'Personal Plans', href: '/personal' },
        { label: 'Business Plans', href: '/business' },
        { label: 'Family Plans', href: '/family' },
        { label: 'Student Discount', href: '/student' },
      ],
    },
  ];
  return (
    <div className='flex  items-center justify-between p-6'>
      <div className='w-[105px]'>
        <img alt='ufone' src={`${ufone}`} />
      </div>

      <div className=' hidden gap-2 lg:flex'>
        <Navigation navItems={lycaItems} onClick={handleClickLink} />
        <Navigation navItems={planItems} onClick={handleClickLink} />
        <Navigation navItems={supportItems} onClick={handleClickLink} />
      </div>

      <div className='flex w-[372px] items-center gap-3'>
        <Button text='Top up' variant='primary' className='w-[80px]' />
        <DropdownButton
          label='My Lyca account'
          onClick={() => console.log('hello')}
          className=''
        />
        <Navigation navItems={lang} onClick={handleClickLink} />
      </div>
    </div>
  );
};

const BottomSection = () => {
  return (
    <div className='flex w-full items-center justify-center p-4'>
      <h4 className='text-[18px] text-white'>Jhon Doe 074 175 955 04</h4>
    </div>
  );
};
