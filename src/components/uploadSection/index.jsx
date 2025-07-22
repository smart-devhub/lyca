import React, { useState } from 'react';
// @ import components
import SVG from 'components/renderSvg';
// @ import media
import CheckCircle from 'media/svgs/check-circle.svg';

const UploadSection = ({ label, required, errors, name, onChange }) => {
  const [uploaded, setUploaded] = useState(false);

  const handleFileChange = event => {
    onChange(event);
    if (event.target.files?.length) {
      setUploaded(true);
    }
  };

  return (
    <div className='mb-4 rounded-lg border border-grayMedium p-4'>
      {label && (
        <label
          className={`mb-[8px] block text-[12px] font-extrabold text-dark ${
            required ? "after:ml-1 after:text-red-500 after:content-['*']" : ''
          }`}
        >
          {label}
        </label>
      )}
      <div className='flex items-center gap-2'>
        <input
          type='file'
          accept='.pdf,.docx,.jpg,.png'
          className='text-gray-500 block w-full cursor-pointer rounded-md border border-grayMedium bg-white p-2 text-sm'
          onChange={handleFileChange}
        />
      </div>
      {uploaded && (
        <p className='mt-2 flex items-center gap-1 text-green-600'>
          <SVG icon={CheckCircle} width='18px' height='18px' className='pl-2' />
          Successfully Uploaded
        </p>
      )}
      {errors.files?.[name] && (
        <p className='text-sm text-red-500'>{errors.files[name]?.message}</p>
      )}
    </div>
  );
};

export default UploadSection;
