import React from 'react'

import axios from 'axios'
import { useDispatch } from "react-redux";
import { signup } from "../store/actions/UserActions";

const classes = {
  button: {
    display: 'block'
  }
}

export const SignUp = () => {
  const dispatch = useDispatch()

  const [info, setInfo] = React.useState({
    username: '',
    major: '',
    password: '',
  })

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(signup(info))
  }

  return (
    <div className={'signup-container form-container container'}>
      <div className={'signup-form form'}>

        <h1>Sign Up</h1>
        <label htmlFor="email"> Email</label>
        <input
          name={'email'}
          type={'text'}
          value={info.username}
          onChange={e => setInfo({...info, username: e.target.value})}
        />

        <label htmlFor="password"> Password</label>
        <input
          name={'password'}
          type={'password'}
          value={info.password}
          onChange={e => setInfo({...info, password: e.target.value})}
        />
        <button className={'btn'} onClick={onSubmit}>Sign Up</button>
        <p>Alreay have an account? <a href="/login">Log In</a></p>
      </div>
    </div>
  )
}