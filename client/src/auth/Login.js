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
      <form style={{width: 200, margin: '0 auto'}}>
        <input
          type="text"
          placeholder={'username'}
          value={info.username}
          onChange={e => setInfo({...info, username: e.target.value})}
        />
        <input
          type="password"
          placeholder={'password'}
          value={info.password}
          onChange={e => setInfo({...info, password: e.target.value})}
        />
        <input type="submit" placeholder={'login'} onClick={onSubmit}/>
      </form>
    )
  )
}