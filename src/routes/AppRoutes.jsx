import { lazy } from 'react';
//@import routes
const Home = lazy(() => import('pages/home/index'));

export const AppRoutes = [
  {
    path: '/',
    component: Home,
  },
];
