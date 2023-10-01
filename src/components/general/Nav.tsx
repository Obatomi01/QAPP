import { NavLink, useLocation } from 'react-router-dom';

import { useEffect, useState } from 'react';

import styles from '../../styles/general/nav.module.scss';

import Ellipse from '../../images/Ellipse 63.png';
import Menu from '../../images/menu.png';
import Close from '../../images/close.png';

type Route = {
  url: string;
  name: string;
};

const routes = [
  {
    url: '/home',
    name: 'Home',
  },
  {
    url: '/feature',
    name: 'Feature',
  },
  {
    url: '/request-a-demo',
    name: 'Request a Demo',
  },
  {
    url: '/account',
    name: 'Account',
  },
];

function Nav() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const location = useLocation();
  const { pathname } = location;

  const navItems = routes.map((route: Route) => (
    <div className={isMobile ? '' : styles['nav--container']} key={route.url}>
      <NavLink
        to={route.url}
        className={({ isActive }) => (isActive ? styles['active'] : '')}
      >
        {route.name}
      </NavLink>
      {pathname === route.url && !isMobile && (
        <img src={Ellipse} alt='icon' className={styles['active--icon']} />
      )}
    </div>
  ));

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 500);
    }

    if (showMobileMenu) {
      document.body.style.position = 'fixed';
    } else {
      document.body.style.position = 'relative';
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile, showMobileMenu]);

  return (
    <nav
      className={isMobile ? styles['mobile--nav'] : styles['nav--containers']}
    >
      {isMobile ? (
        <>
          {!showMobileMenu && (
            <img
              src={Menu}
              alt='icon'
              className={styles['menu--btn']}
              onClick={() => {
                setShowMobileMenu(true);
              }}
            />
          )}
          {showMobileMenu && (
            <>
              <div className={styles['mobile--nav__container']}>
                <div
                  style={{
                    height: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    paddingTop: '6.4rem',
                    marginInline: 'auto',
                  }}
                >
                  {navItems}
                </div>
              </div>
              <img
                src={Close}
                alt='icon'
                className={styles['close--btn']}
                onClick={() => {
                  setShowMobileMenu(false);
                }}
              />
            </>
          )}
        </>
      ) : (
        navItems
      )}
    </nav>
  );
}

export default Nav;
