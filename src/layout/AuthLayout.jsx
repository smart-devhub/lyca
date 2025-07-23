import React from 'react';
// @import components
import Header from './Header';
import Footer from './Footer';

const AuthLayout = ({ children }) => {
  return (
    <div className='w-full bg-black'>
      <Header />
      <main className={`m-5 rounded-[20px] bg-white px-[120px] py-[60px]`}>
        <div className='container'>
          <div className='row'>{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
