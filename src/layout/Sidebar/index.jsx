import React, { useState } from 'react';
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

const MenuItem = ({ item, isExpanded, hasChildren, onToggle }) => {
  return (
    <div className='flex w-full items-center justify-between whitespace-nowrap text-nowrap'>
      <div className='flex items-center gap-[16px]'>
        {item?.icon}
        <span className={`text-dark text-[16px] font-normal  ${styles.name}`}>
          {item.name}
        </span>
      </div>
      {hasChildren && (
        <div
          className={`${styles.arrowIcon} brightness-0 saturate-100 duration-300 ease-linear ${
            isExpanded ? styles.arrowExpanded : ''
          }`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggle();
          }}
        ></div>
      )}
    </div>
  );
};

const SubMenuItem = ({ item, isActive }) => {
  return (
    <Link
      to={item.path}
      className={`${styles.subMenuItem} ${
        isActive ? styles.subMenuItemActive : ''
      }`}
    >
      <span className={`text-dark text-[14px] font-normal ${styles.subMenuName}`}>
        {item.name}
      </span>
    </Link>
  );
};

const Sidebar = ({ handleLogout }) => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState(new Set());

  const toggleExpanded = (itemName) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemName)) {
        newSet.delete(itemName);
      } else {
        newSet.add(itemName);
      }
      return newSet;
    });
  };

  const isItemActive = (item) => {
    if (item.children) {
      return item.children.some(child => location.pathname === child.path);
    }
    return location.pathname === item.path;
  };

  const isChildActive = (childPath) => {
    return location.pathname === childPath;
  };

  return (
    <div className='flex flex-col'>
      <div className={` bg-light_primary  ${styles.sidebar}`}>
        <span className={`hidden xl:block ${styles.semiCircle}`}></span>
        <ul className={`${styles.menuList} h-full`}>
          <>
            {SidebarRoutes?.map(item => (
              <li key={item.name} className={styles.menuItemWrapper}>
                {item.children ? (
                  <div
                    className={`w-full ${styles.menuItem} ${
                      isItemActive(item) ? `${styles.active}` : ''
                    }`}
                    onClick={() => toggleExpanded(item.name)}
                  >
                    <MenuItem 
                      item={item} 
                      isExpanded={expandedItems.has(item.name)}
                      hasChildren={true}
                      onToggle={() => toggleExpanded(item.name)}
                    />
                  </div>
                ) : (
                  <Link
                    to={item?.path}
                    className={`w-full ${styles.menuItem} ${
                      isItemActive(item) ? `${styles.active}` : ''
                    }`}
                  >
                    <MenuItem item={item} />
                  </Link>
                )}
                
                {item.children && expandedItems.has(item.name) && (
                  <div className={styles.subMenuContainer}>
                    {item.children.map((child, index) => (
                      <SubMenuItem
                        key={index}
                        item={child}
                        isActive={isChildActive(child.path)}
                      />
                    ))}
                  </div>
                )}
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
