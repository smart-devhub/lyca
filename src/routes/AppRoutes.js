import { lazy } from 'react';
//@import routes
const Home = lazy(() => import('pages/home/index'));
const AuthHome = lazy(() => import('pages/auth/index'));

export const AppRoutes = [
  {
    path: '/login',
    component: AuthHome,
    layout: 'auth',
  },
  {
    path: '/',
    component: Home,
    layout: 'main',
  },
];
