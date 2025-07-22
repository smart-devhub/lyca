import React from 'react';
//@import dependencies

import { Link, useLocation } from 'react-router-dom';
// @import redux slices

// @import customHook

//@import components
import SVG from 'components/renderSvg';
// @import routes
import { SidebarRoutes } from 'routes/SidebarRoutes';
// @import media
import logoutIcon from 'media/svgs/sidebar/logout.svg';
// @import styles
import styles from './index.module.scss';

const MenuItem = ({ item }) => {
  return (
    <div className='flex w-full items-center justify-between whitespace-nowrap text-nowrap'>
      <div className='flex items-center gap-[16px]'>
        {item?.icon}
        <span className={`text-dark text-[16px] font-normal  ${styles.name}`}>
          {item.name}
        </span>
      </div>
      <div
        className={`${styles.arrowIcon} brightness-0  saturate-100 duration-300 ease-linear `}
      ></div>
    </div>
  );
};

const Sidebar = ({ handleLogout }) => {
  const location = useLocation();

  return (
    <div className='flex flex-col'>
      <div className={` bg-light_primary  ${styles.sidebar}`}>
        <span className={`hidden xl:block ${styles.semiCircle}`}></span>
        <ul className={`${styles.menuList} h-full`}>
          <>
            {SidebarRoutes?.map(item => (
              <li key={item.name} className={styles.menuItemWrapper}>
                <Link
                  to={item?.path}
                  className={`w-full ${styles.menuItem} ${
                    location.pathname === item.path && `${styles.active}`
                  }`}
                >
                  <MenuItem item={item} />
                </Link>
              </li>
            ))}
          </>

          <li className={`${styles.menuItemWrapper} cursor-pointer`}>
            <div className={`${styles.menuItem}`} onClick={handleLogout}>
              <div className='flex items-center gap-[16px]'>
                <SVG icon={logoutIcon} />
                <span className={styles.name}>Logout</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className='flex h-[88px] items-center justify-center rounded-b-[20px] bg-primary text-white'>
        <div>
          <h4>Refer a Friend</h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
