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
    path: '/plan',
    icon: <SVG icon={templatesIcon} className='' />,
    name: 'Plan',
    children: [
      {
        path: '/plan/current',
        name: 'Current Plan',
      },
      {
        path: '/plan/upgrade',
        name: 'Upgrade Plan',
      },
      {
        path: '/plan/history',
        name: 'Plan History',
      },
    ],
  },
  {
    path: '/family-plan',
    icon: <SVG icon={templatesIcon} className='' />,
    name: 'Family Plan',
    children: [
      {
        path: '/family-plan/members',
        name: 'Family Members',
      },
      {
        path: '/family-plan/settings',
        name: 'Settings',
      },
    ],
  },
  {
    path: '/top-up',
    icon: <SVG icon={templatesIcon} className='' />,
    name: 'Top up',
    children: [
      {
        path: '/top-up/quick',
        name: 'Quick Top-up',
      },
      {
        path: '/top-up/scheduled',
        name: 'Scheduled Top-up',
      },
    ],
  },
  {
    path: '/payments',
    icon: <SVG icon={templatesIcon} className='' />,
    name: 'Payments',
    children: [
      {
        path: '/payments/history',
        name: 'Payment History',
      },
      {
        path: '/payments/methods',
        name: 'Payment Methods',
      },
    ],
  },
  {
    path: '/usage',
    icon: <SVG icon={templatesIcon} className='' />,
    name: 'Usage and history',
    children: [
      {
        path: '/usage/data',
        name: 'Data Usage',
      },
      {
        path: '/usage/calls',
        name: 'Call History',
      },
      {
        path: '/usage/sms',
        name: 'SMS History',
      },
    ],
  },
  {
    path: '/account',
    icon: <SVG icon={templatesIcon} className='' />,
    name: 'Account Management',
    children: [
      {
        path: '/account/profile',
        name: 'Profile Settings',
      },
      {
        path: '/account/security',
        name: 'Security',
      },
      {
        path: '/account/preferences',
        name: 'Preferences',
      },
    ],
  },
  {
    path: '/help',
    icon: <SVG icon={templatesIcon} className='' />,
    name: 'Help and Support',
    children: [
      {
        path: '/help/faq',
        name: 'FAQ',
      },
      {
        path: '/help/contact',
        name: 'Contact Support',
      },
      {
        path: '/help/tutorials',
        name: 'Tutorials',
      },
    ],
  },
];
