import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { login } from '../store/actions/UserActions'
import { Redirect } from "react-router-dom";
import { getToken } from "../utils/token";

export const Login = () => {
  const dispatch = useDispatch()
  const token = getToken()

  const [info, setInfo] = React.useState({
    username: '',
    password: '',
  })

  const onSubmit = e => {
    e.preventDefault()
    dispatch(login(info))
  }

  return (
    token ? <Redirect from={'/login'} to={'/'}/> : (
      <div className="login-container form-container container">
        <div className="login-form form">

          <h1>Log In</h1>
          <label htmlFor="email"> Email</label>
          <input
            name={'email'}
            id={'email'}
            type={'text'}
            value={info.username}
            onChange={e => setInfo({...info, username: e.target.value})}
          />

          <label htmlFor="password"> Password</label>
          <input
            name={'password'}
            type="password"
            value={info.password}
            onChange={e => setInfo({...info, password: e.target.value})}
          />
          <button className={'btn'} onClick={onSubmit}>Log In</button>
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>
      </div>
    )
  )
}