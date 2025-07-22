import React from 'react';
//@ import media
import userAvatar from 'media/pngs/userAvatar.png';

const UserinfoCard = ({
  ntn,
  gst,
  userName,
  userEmail,
  customerId,
  companyName,
  accountType,
  contactNumber,
}) => {
  return (
    <div className='cardWrapper overflow-hidden rounded-[15px] border border-orange shadow-md'>
      <div className='cardHead bg-white p-[15px] md:p-[30px]'>
        <div className='flex items-center gap-[12px]'>
          <div className='userImg'>
            <img src={userAvatar} alt='avatar' />
          </div>
          <div className='userInfo'>
            <h4 className='m-0 text-[14px] font-extrabold text-dark'>
              {userName}
            </h4>
            <span className='text-[12px] font-normal text-orange'>
              {userEmail}
            </span>
          </div>
        </div>
      </div>
      <div className='cardBody bg-extralightOrange'>
        {customerId && (
          <div className='flex justify-between border-b border-verylightOrange px-[15px] py-[18px] md:px-[30px]'>
            <label className='text-[16px] font-extrabold capitalize'>
              Customer ID:
            </label>
            <h4 className='text-[16px] font-bold capitalize'>{customerId}</h4>
          </div>
        )}
        {contactNumber && (
          <div className='flex justify-between border-b border-verylightOrange  px-[15px] py-[18px] md:px-[30px]'>
            <label className='text-[16px] font-extrabold capitalize'>
              Contact Number:
            </label>
            <h4 className='text-[16px] font-bold capitalize'>
              {contactNumber}
            </h4>
          </div>
        )}
        {companyName && (
          <div className='flex justify-between border-b border-verylightOrange  px-[15px] py-[18px] md:px-[30px]'>
            <label className='text-[16px] font-extrabold capitalize'>
              Company Name
            </label>
            <h4 className='text-[16px] font-bold capitalize'>{companyName}</h4>
          </div>
        )}
        {ntn && (
          <div className='flex justify-between border-b border-verylightOrange px-[15px] py-[18px] md:px-[30px]'>
            <label className='text-[16px] font-extrabold capitalize'>
              NTN :
            </label>
            <h4 className='text-[16px] font-bold capitalize'>{ntn}</h4>
          </div>
        )}
        {accountType && (
          <div className='flex justify-between px-[15px] py-[18px] md:px-[30px]'>
            <label className='text-[16px] font-extrabold capitalize'>
              Account Type :
            </label>
            <h4 className='text-[16px] font-bold capitalize'>{accountType}</h4>
          </div>
        )}
        {gst && (
          <div className='flex justify-between px-[15px] py-[18px] md:px-[30px]'>
            <label className='text-[16px] font-extrabold capitalize'>
              GST Number :
            </label>
            <h4 className='text-[16px] font-bold capitalize'>{gst}</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserinfoCard;
