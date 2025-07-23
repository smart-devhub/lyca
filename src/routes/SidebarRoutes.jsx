// @import components
import SVG from 'components/renderSvg';
// @import media
import dashboardIcon from 'media/svgs/sidebar/dashboard.svg';
import templatesIcon from 'media/svgs/sidebar/templates.svg';

export const SidebarRoutes = [
  //<---------------Home--------------->
  {
    path: '/',
    icon: <SVG icon={dashboardIcon} />,
    name: 'Home',
  },
  {
    path: '',
    icon: <SVG icon={templatesIcon} className='' />,
    name: 'Plan',
  },
  {
    path: '',
    icon: <SVG icon={templatesIcon} className='' />,
    name: 'Family Plan',
  },
  {
    path: '',
    icon: <SVG icon={templatesIcon} className='' />,
    name: 'Top up',
  },
  {
    path: '',
    icon: <SVG icon={templatesIcon} className='' />,
    name: 'Payments',
  },
  {
    path: '',
    icon: <SVG icon={templatesIcon} className='' />,
    name: 'Usage and history',
  },
  {
    path: '',
    icon: <SVG icon={templatesIcon} className='' />,
    name: 'Account Management ',
  },
  {
    path: '',
    icon: <SVG icon={templatesIcon} className='' />,
    name: 'Help and Support ',
  },
];
