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
    name: 'Plans',
  },

  //<---------------Manage-Masking SubCategory--------------->
];
