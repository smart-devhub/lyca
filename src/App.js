import { Routes, Route } from 'react-router-dom';
// @import components
import MainLayout from 'layout/MainLayout';
import AuthLayout from 'layout/AuthLayout';
// @import dependencies
import { Helmet } from 'react-helmet';
import { AppRoutes } from 'routes/AppRoutes';
import { Suspense } from 'react';
import Loader from 'components/loader';

function App() {
  const authRoutes = AppRoutes?.filter(r => r.layout === 'auth');
  const mainRoutes = AppRoutes?.filter(r => r.layout === 'main');

  return (
    <>
      <Helmet>
        <title>Lyca</title>
        <meta name='description' content='Your page description here' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Helmet>
      <Routes>
        {mainRoutes?.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            element={
              <MainLayout>
                <Suspense fallback={<Loader />}>
                  <route.component />
                </Suspense>
              </MainLayout>
            }
          />
        ))}

        {authRoutes?.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            element={
              <AuthLayout>
                <Suspense fallback={<Loader />}>
                  <route.component />
                </Suspense>
              </AuthLayout>
            }
          />
        ))}

        <Route path='*' element={<>Not Found</>} />
      </Routes>
    </>
  );
}

export default App;
