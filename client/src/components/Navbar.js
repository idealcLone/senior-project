import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/actions/UserActions";
import { getToken } from "../utils/token";

const classes = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '20%',
    margin: '0 auto',
  },
  a: {}
}

export const Navbar = () => {
  const dispatch = useDispatch()
  const [token, setToken] = React.useState(getToken())

  const handleLogOut = () => {
    dispatch(logout())
  }

  return (
    <nav style={classes.nav}>
      <a style={classes.a} href="/">Home Page</a>
      {token
        ? <span>
            <a href="/profile">My Profile</a>
            <a href="" onClick={handleLogOut}>Log Out</a>
          </span>
        : <span>
            <a href='/login'>Log In</a>
            <a href="/signup">Sign Up</a>
          </span>
      }
    </nav>
  )
}