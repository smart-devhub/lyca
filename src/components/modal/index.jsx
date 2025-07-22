import React from 'react';
//@ import media
import cross from 'media/svgs/close-circle-filled.svg';

const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  childrenClass = 'p-[30px] !pt-0 md:p-[40px]',
  modalClassess = 'max-w-[720px] min-h-[460px] md:min-h-[550px] rounded-[12px]',
}) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-[999] flex items-center justify-center bg-black/50'>
      <div
        className={`xs:mx-[40px] mx-[15px] flex w-full flex-col  bg-white shadow-lg md:mx-auto ${modalClassess}`}
      >
        <div className='flex items-center justify-between'>
          <h1 className='px-[12px] pt-[12px] text-[20px] font-bold md:px-[24px] md:pt-[24px]'>
            {title || ''}
          </h1>{' '}
          {onClose ? (
            <div
              className={`flex justify-end px-[12px] pt-[12px] md:px-[24px] md:pt-[24px]`}
            >
              <button onClick={onClose}>
                <img
                  src={cross}
                  alt={'cross'}
                  className={`size-[24px] md:size-[30px]`}
                />
              </button>
            </div>
          ) : null}
        </div>

        <div className={`flex flex-1 flex-col ${childrenClass}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
