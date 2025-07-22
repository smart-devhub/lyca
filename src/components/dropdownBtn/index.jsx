import { useState } from 'react';

export default function DropdownButton({
  label = '',
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'md',
  className = '',
}) {
  const [isPressed, setIsPressed] = useState(false);

  const baseClasses =
    'inline-flex items-center text-sm justify-between gap-3 font-medium rounded-[160px] transition-all duration-200 ';

  const variantClasses = {
    primary: 'bg-white text-black ',
    secondary: 'bg-gray-100 text-gray-900 ',
    outline: 'border-2 border-slate-800 text-slate-800',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer';

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const handleClick = () => {
    onClick();
    setIsPressed(prev => !prev);
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabledClasses}
        ${isPressed ? 'scale-95' : ''}
        ${className}
      `}
    >
      <span>{label}</span>
      <svg
        width='16'
        height='16'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className={`${iconSizes[size]} transition-transform duration-200 ${isPressed ? 'rotate-180' : ''}`}
      >
        <path d='m6 9 6 6 6-6' />
      </svg>
    </button>
  );
}
