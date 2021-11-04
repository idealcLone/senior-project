import React from "react";

import { useDispatch, useSelector } from "react-redux";

import api from "../../utils/api";
import { setToken } from "../../utils/token";
import { history } from "../../App";

export const Login = () => {
  const dispatch = useDispatch()

  const [loading, setLoading] = React.useState(false)
  const [info, setInfo] = React.useState({
    email: '',
    password: '',
  })

  const onSubmit = e => {
    setLoading(true)

    api
      .post('/account/login/', { ...info })
      .then(res => {
        const data = res.data
        setToken(data.access_token)
        localStorage.setItem('token', data.refresh_token)

        history.push('/')
        window.location.reload()
      })
      .catch(err => {})

  }

  return (
    <div className="login-container form-container container">
      <div className="login-form form">

        <h1>Log In</h1>
        <label htmlFor="email"> Email</label>
        <input
          name={'email'}
          id={'email'}
          type={'text'}
          value={info.email}
          onChange={e => setInfo({ ...info, email: e.target.value })}
        />

        <label htmlFor="password"> Password</label>
        <input
          name={'password'}
          type="password"
          value={info.password}
          onChange={e => setInfo({ ...info, password: e.target.value })}
        />
        <button className={'btn'} onClick={onSubmit}>Log In</button>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  )
}