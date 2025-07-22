import React from 'react';

const Button = ({
  variant,
  onClick,
  disabled,
  icon,
  iconRight = false,
  text = '',
  iconClass = '',
  type = 'submit',
  className = '',
  wrapperClass = '',
}) => {
  const baseStyle = `px-[16px] h-[40px] flex justify-center items-center text-center text-[16px] font-[400] rounded-[160px] transition ease-in-out duration-150 ${className}`;
  const variantStyles = {
    primary: 'bg-[#006AE0] text-white font-extrabold text-[14px]',
    secondary:
      'bg-gray-500 text-white hover:bg-gray-600 font-[400] text-[16px]',
    danger: 'bg-red-500 text-white hover:bg-red-600 font-[400] text-[16px]',
    success: 'bg-oliveGreen text-white font-[400] text-[16px]',
    outline:
      'bg-transparent border-[0.5px] border-solid border-[#D0D5DD]   text-black font-[400] text-[16px]',
  };

  const disabledStyle = disabled
    ? 'opacity-50 !bg-gray-400  cursor-not-allowed'
    : '';

  return (
    <button
      className={`w-full ${baseStyle} ${variantStyles[variant]}  ${disabledStyle} ${wrapperClass}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {icon && (
        <img
          alt='icon'
          src={icon}
          className={`mr-2 h-[15px] w-[18px]  ${iconRight ? 'order-2' : 'order-1'} ${iconClass}`}
        />
      )}
      {text ? (
        <span
          className={`text-[14px] font-normal leading-4 ${iconRight ? 'order-1' : 'order-2'}`}
        >
          {text}
        </span>
      ) : null}
    </button>
  );
};

export default Button;
