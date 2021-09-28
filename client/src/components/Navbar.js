import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/actions/UserActions";
import { getToken } from "../utils/token";
import { makeStyles } from "@material-ui/core";

export const Navbar = () => {
  const dispatch = useDispatch()
  const [token, setToken] = React.useState(getToken())

  const links = [
    {
      link: '/courses',
      title: 'Courses',
    },
    {
      link: '/events',
      title: 'Events',
    },
    {
      link: '/schedule',
      title: 'Schedule Maker',
    },
    {
      link: '/registration',
      title: 'Registration Training',
    },
    {
      link: '/faq',
      title: 'FAQ',
    },
  ]

  const handleLogOut = () => {
    dispatch(logout())
  }

  return (
    <nav className={'navbar'}>
      <div className={'navbar__container container'}>
        <div className={'logo'}><a href="/">Brand</a></div>
        <ul>
          {
            links.map(link =>
              <li key={link.link}>
                <a href={link.link}>{link.title}</a>
              </li>
            )
          }
        </ul>
        {token
          ? (
            <div className="my-profile">
              <a href="/profile">My profile </a><i className="fas fa-caret-down"></i><i
              className="fas fa-caret-up"></i>
              <div className="my-profile__dropdown">
                <p><a href="/profile">Edit Profile</a></p>
                <p><a href="/calendar">My Calendar</a></p>
                <p><a href="/schedule">My Schedule</a></p>
                <p><a onClick={handleLogOut} href="/">Log Out</a></p>
              </div>
              <div className="my-profile__options">
                <ul>
                  <p><a href="/profile">Edit Profile</a></p>
                  <p><a href="/calendar">My Calendar</a></p>
                  <p><a href="/schedule">My Schedule</a></p>
                  <p><a onClick={handleLogOut} href="/">Log Out</a></p>
                </ul>
              </div>
            </div>
          ) : (
            <div className="register-buttons">
              <a href="/login" className="btn">LOG IN</a>
              <a href="/signup" className="btn btn-dark">SIGN UP</a>
            </div>
          )
        }
      </div>
    </nav>
  )
}