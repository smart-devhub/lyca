import React from 'react';
import { useNavigate } from 'react-router-dom';
import goBack from 'media/svgs/prev.svg';
import Button from 'components/button';

const PaperBlock = props => {
  const navigate = useNavigate();

  const {
    title,
    children,
    isBackBtn = false,
    isHeader = true,
    childClass = 'flex flex-col flex-grow',
    className = '',
    headerClasses = '',
  } = props;
  return (
    <div
      key={location.pathname}
      className={`rounded-[15px] bg-white shadow-md ${className}`}
    >
      {isHeader && (
        <header
          className={`flex flex-col justify-center rounded-t-[15px] border-b border-b-grayMedium bg-gray p-[15px] md:px-[30px] ${isBackBtn ? 'gap-y-2 md:py-[20px]' : 'md:py-[30px]'} ${headerClasses}`}
        >
          {isBackBtn ? (
            <Button
              title='Back'
              variant='primary'
              wrapperClass='border-orange !w-[70px] !px-2 !py-1 mr-2 text-dark !h-[36px]'
              onClick={() => navigate(-1)}
              icon={goBack}
              iconClass='imageWhite !h-[13px] !mr-1'
            />
          ) : null}

          <h3 className='text-[18px] font-extrabold md:text-[22px]'>{title}</h3>
        </header>
      )}

      <div className={`p-[16px] md:p-[30px] ${childClass}`}>{children}</div>
    </div>
  );
};

export default PaperBlock;
