import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../store/actions/UserActions';
import { getUser } from '../store/selectors/UserSelectors';
import { Link } from 'react-router-dom';
import { Nav } from './styles';
import { MoreIcon } from '../utils/icons';
import { useHistory } from 'react-router';

const routes = [
  {
    link: '/courses',
    name: 'Courses'
  },
  {
    link: '/events',
    name: 'Events'
  },
  {
    link: '/schedule',
    name: 'Schedule Maker'
  },
  {
    link: '/registration',
    name: 'Registration Training'
  },
  {
    link: '/faq',
    name: 'FAQ'
  }
];

const dropdown = [
  {
    name: 'Edit Profile',
    path: '/profile'
  },
  {
    name: 'My Schedule',
    path: '/schedule'
  },
  {
    name: 'My Calendar',
    path: '/calendar'
  }
];

export const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');

  const user = useSelector(getUser);

  const [showDropdown, setShowDropdown] = React.useState(false);

  const handleLogout = () => {
    dispatch(userLogout());
  };

  return (
    <Nav>
      <div className="container">
        <div className={'logo'} onClick={() => history.push('/')}>
          Brand
        </div>
        <ul>
          {routes.map((route) => (
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
                <ul className="dropdown" onClick={() => setShowDropdown(false)}>
                  {dropdown.map((option) => (
                    <li key={option.path} onClick={() => history.push(option.path)}>
                      <Link to={option.path}>{option.name}</Link>
                    </li>
                  ))}
                  {user.is_admin && (
                    <li key={'/admin'}>
                      <Link to={'/admin'}>Admin Page</Link>
                    </li>
                  )}
                  <li onClick={handleLogout}>Log Out</li>
                </ul>
              )}
            </>
          )}
          {!token && (
            <div>
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
