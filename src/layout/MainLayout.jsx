import React, { Suspense } from 'react';
// @ import dependencies
import { Route, Routes } from 'react-router-dom';
// @import components
import Sidebar from './Sidebar';
import Header from './Header';
import Loader from 'components/loader';

//@import routes
import { AppRoutes } from 'routes/AppRoutes';
import Footer from './Footer';

const MainLayout = ({ handleLogout }) => {
  return (
    <main className={`m-5 rounded-[20px] bg-white px-[120px] py-[60px]`}>
      <div className='container'>
        <div className='row'>
          <div className='hidden px-2 lg:block lg:w-4/12'>
            <Sidebar handleLogout={handleLogout} />
          </div>
          <div className='w-full px-2 lg:w-8/12'>
            <Suspense fallback={<Loader />}>
              <Routes>
                {AppRoutes?.map((route, k) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<route.component />}
                  />
                ))}

                <Route path='*' element={<>Not Found</>} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
};

const Layout = ({ handleLogout }) => {
  return (
    <div className='w-full bg-black'>
      <Header handleLogout={handleLogout} />
      <MainLayout handleLogout={handleLogout} />
      <Footer />
    </div>
  );
};

export default Layout;
