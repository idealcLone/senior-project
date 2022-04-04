import React from 'react';

import styles from './Navbar.modules.scss';
import { useNavigate } from 'react-router-dom';

type navLinkType = {
  name: string;
  route: string;
};

const navLinks: navLinkType[] = [
  {
    name: 'Courses',
    route: '/courses',
  },
  {
    name: 'Events',
    route: '/events',
  },
  {
    name: 'Schedule Maker',
    route: '/schedule-maker',
  },
  {
    name: 'Registration Training',
    route: '/registration-training',
  },
  {
    name: 'FAQ',
    route: 'faq',
  },
];

export const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (to: string) => {
    navigate(to);
  };

  return (
    <nav className={styles.navbar}>
      <span className={styles.logo} onClick={() => handleNavigate('/')}>
        NUSH
      </span>
      <ul className={styles.links}>
        {navLinks.map(navLink => (
          <li key={navLink.name} onClick={() => handleNavigate(navLink.route)}>
            {navLink.name}
          </li>
        ))}
      </ul>
      <div className={styles.authButtons}>
        <button onClick={() => handleNavigate('/login')}>Log in</button>
        <button onClick={() => handleNavigate('/sign-up')}>Sign up</button>
      </div>
    </nav>
  );
};
