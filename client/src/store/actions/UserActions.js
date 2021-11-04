import {
  USER_LOGOUT
} from '../types/UserTypes'

import { removeToken } from "../../utils/token";
import { history } from "../../App";

export const userLogout = () => dispatch => {
  removeToken()
  localStorage.removeItem('Token')
  dispatch({ type: USER_LOGOUT })
  history.push('/')
  window.location.reload()
}