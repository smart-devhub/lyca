import React from 'react';
// @import components
import Modal from 'components/modal';
import Button from 'components/button';

function ConfirmationPopup({
  onClose,
  onConfirm,
  isOpen = false,
  title = 'Are you sure?',
  message = 'Item will be deleted permanently',
  primaryLabel = 'Yes',
  secondaryLabel = 'No',
}) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        modalClassess='min-h-[200px] max-w-[400px]'
        childrenClass={'items-center justify-center gap-[20px] px-[15px]'}
      >
        <div className='card-head w-full text-center'>
          <h2>{title}</h2>
          <p>{message}</p>
        </div>
        <div className='card-footer flex w-full justify-center'>
          <div className='flex w-full flex-col gap-3 md:w-[90%] md:flex-row'>
            <Button
              variant={'outline'}
              title={secondaryLabel}
              onClick={onClose}
            />
            <Button
              variant={'primary'}
              title={primaryLabel}
              onClick={onConfirm}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ConfirmationPopup;
