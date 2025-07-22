import { useState, useRef, useEffect } from 'react';

export default function Navigation({ navItems, onClick }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = label => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleDropdownItemClick = item => {
    onClick(item);
    setActiveDropdown(null);
  };

  return (
    <nav className=' text-white'>
      <div className='mx-auto max-w-4xl'>
        <div
          className='flex h-14 items-center justify-start space-x-8'
          ref={dropdownRef}
        >
          {navItems.map((item, index) => (
            <div key={index} className='relative'>
              <button
                onClick={() => toggleDropdown(item.label)}
                className='flex items-center space-x-2 rounded px-3  text-white transition-colors duration-200 '
              >
                <span className='text-sm font-medium  text-secondary'>
                  {item.label}
                </span>

                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className={`size-4 transition-transform duration-200 ${
                    activeDropdown === item.label ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  <path d='m6 9 6 6 6-6' />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {activeDropdown === item.label && item.dropdown && (
                <div className='absolute left-0 top-full z-50 mt-1 w-48 rounded-md border border-slate-600 bg-slate-700 shadow-lg'>
                  <div className='py-1'>
                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                      <button
                        key={dropdownIndex}
                        onClick={() => handleDropdownItemClick(dropdownItem)}
                        className='block w-full px-4 py-2 text-left text-sm text-white transition-colors duration-150 hover:bg-slate-600'
                      >
                        {dropdownItem.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
