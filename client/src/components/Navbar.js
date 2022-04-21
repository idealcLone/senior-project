import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../store/actions/UserActions';
import { getUser } from '../store/selectors/UserSelectors';
import { Link } from 'react-router-dom';
import { Nav } from './styles';
import { MoreIcon } from '../utils/icons';
import { ADMIN, MANAGER } from '../consts/roles';

const routes = [
  {
    link: '/courses',
    name: 'Courses',
  },
  {
    link: '/events',
    name: 'Events',
  },
  {
    link: '/schedule-maker',
    name: 'Schedule Maker',
  },
  {
    link: '/registration',
    name: 'Registration Training',
  },
  {
    link: '/faq',
    name: 'FAQ',
  },
];

const dropdown = [
  {
    name: 'Edit Profile',
    path: '/profile',
  },
  {
    name: 'My Schedule',
    path: '/schedule',
  },
  {
    name: 'My Calendar',
    path: '/calendar',
  },
];

export const Navbar = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');

  const user = useSelector(getUser);

  const [showDropdown, setShowDropdown] = React.useState(false);

  const dropdownToggle = () => setShowDropdown(false);

  React.useEffect(() => {
    if (showDropdown) {
      window.addEventListener('click', dropdownToggle);
    }
    return () => window.removeEventListener('click', dropdownToggle);
  }, [showDropdown]);

  const handleLogout = () => {
    dispatch(userLogout());
  };

  return (
    <Nav>
      <div className="container">
        <div className={'logo'}>
          <Link to="/">NUSH</Link>
        </div>
        <ul>
          {routes.map(route => (
            <li key={route.link}>
              <Link to={route.link}>{route.name}</Link>
            </li>
          ))}
        </ul>
        <div className="navbar-auth">
          {token && (
            <>
              <div onClick={() => setShowDropdown(!showDropdown)}>
                <span>My profile</span>
                <MoreIcon />
              </div>
              {showDropdown && (
                <ul className="dropdown">
                  {dropdown.map(option => (
                    <li key={option.path}>
                      <Link to={option.path}>{option.name}</Link>
                    </li>
                  ))}
                  {user?.roles.find(role => role.name === ADMIN) && (
                    <li key={'/admin'}>
                      <Link to={'/admin'}>Admin Page</Link>
                    </li>
                  )}
                  {user?.restaurant && (
                    <li key={'/manager'}>
                      <Link to={'/manager'}>Manager Page</Link>
                    </li>
                  )}
                  <li onClick={handleLogout}>Log Out</li>
                </ul>
              )}
            </>
          )}
          {!token && (
            <div className="auth-buttons">
              <Link to="/login" className="btn">
                LOG IN
              </Link>
              <Link to="/signup" className="btn btn-dark">
                SIGN UP
              </Link>
            </div>
          )}
        </div>
      </div>
    </Nav>
  );
};
