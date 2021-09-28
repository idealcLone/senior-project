import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL,
  SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAIL,
  LOGOUT, USER_INFO_GET,
} from '../types/UserTypes'

import api from "../../utils/api";
import { removeToken, setToken } from "../../utils/token";
import { history } from "../../App";

export const login = (user) => async (dispatch) => {
  dispatch({type: LOGIN_REQUEST})

  await api.post('/user/login/', {...user})
    .then(res => res.data)
    .then(data => {
      setToken(data.token)
      dispatch({type: LOGIN_SUCCESS})
    })
    .then(() => {
      history.push('/')
      window.location.reload()
    })
    .catch(err => dispatch({ type: LOGIN_FAIL, payload: err.response }))
}

export const signup = (user) => async (dispatch) => {
  dispatch({ type: SIGN_UP_REQUEST })

  await api.post('/user/create/', {...user})
    .then(() => dispatch({ type: SIGN_UP_SUCCESS }))
    .then(() => {
      history.push('/login')
      window.location.reload()
    })
    .catch(err => dispatch({ type: SIGN_UP_FAIL, payload: err.response }))
}

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT })
  removeToken()
  window.location.reload()
}

export const getUserInfo = () => async (dispatch) => {
  await api.get('/user/profile/')
    .then(res => res.data)
    .then(user => dispatch({ type: USER_INFO_GET, payload: user }))
}