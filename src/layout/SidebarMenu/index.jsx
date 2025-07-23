import Sidebar from 'layout/Sidebar';
import React, { useState } from 'react';

const SidebarMenu = ({ handleLogout }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(prev => !prev);
  };

  return (
    <>
      {/* Top Mobile Bar */}
      <div className='relative flex items-center justify-between bg-light_primary px-6 py-4 lg:hidden'>
        <div className='flex items-center gap-3 rounded-[160px] bg-primary p-4 text-stone'>
          <div>icon</div>
          <h5>Home</h5>
        </div>
        <div className='cursor-pointer text-white' onClick={toggleDrawer}>
          icon
        </div>
        {isDrawerOpen && (
          <div className='absolute inset-0 z-50 flex h-screen flex-col bg-light_primary transition-all duration-300 ease-in-out'>
            {/* Close button */}
            <div className='flex justify-end p-4'>
              <button onClick={toggleDrawer} className='text-dark text-xl'>
                ✕
              </button>
            </div>

            {/* Sidebar content */}
            <div className='flex-1 overflow-y-auto'>
              <Sidebar handleLogout={handleLogout} onLinkClick={toggleDrawer} />
            </div>
          </div>
        )}
      </div>

      {/* Top-to-Bottom Drawer */}
    </>
  );
};

export default SidebarMenu;
