import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, userLogout } from "../store/actions/UserActions";
import { getToken } from "../utils/token";
import { getUser } from "../store/selectors/UserSelectors";
import { Link } from "react-router-dom";

const links = [
  {
    link: '/courses',
    name: 'Courses',
  },
  {
    link: '/events',
    name: 'Events',
  },
  {
    link: '/schedule',
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
]

export const Navbar = () => {
  const dispatch = useDispatch()
  const token = getToken()

  const handleLogout = () => {
    dispatch(userLogout())
  }

  return (
    <nav className={'navbar'}>
      <div className={'navbar__container container'}>
        <div className={'logo'}>
          <Link to="/">Brand</Link>
        </div>
        <ul>
          {
            links.map(link =>
              <li key={link.link}>
                <Link to={link.link}>{link.name}</Link>
              </li>
            )
          }
        </ul>
        {token ? (
          <div className="my-profile">
            <Link to="/profile">My profile</Link>
            <div onClick={handleLogout}>Logout</div>
          </div>
        ) : (
          <div className="register-buttons">
            <Link to="/login" className="btn">LOG IN</Link>
            <Link to="/signup" className="btn btn-dark">SIGN UP</Link>
          </div>
        )}
      </div>
    </nav>
  )
}