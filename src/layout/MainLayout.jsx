import React from 'react';
// @import components
import Sidebar from './Sidebar';
import Header from './Header';

//@import routes
import Footer from './Footer';
import SidebarMenu from './SidebarMenu';

const Layout = ({ handleLogout, children }) => {
  return (
    <div className='w-full bg-black'>
      <Header handleLogout={handleLogout} />
      <SidebarMenu />
      <main className={`m-5 rounded-[20px] bg-white px-[120px] py-[60px]`}>
        <div className='container'>
          <div className='row'>
            <div className='hidden px-2 lg:block lg:w-4/12'>
              <Sidebar handleLogout={handleLogout} />
            </div>
            <div className='w-full px-2 lg:w-8/12'>{children}</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
