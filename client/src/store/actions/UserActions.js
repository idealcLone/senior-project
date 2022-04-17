import { GET_USER_INFO, USER_LOGOUT } from '../types/UserTypes';

import { removeToken } from '../../utils/token';
import api from '../../utils/api';

export const userLogout = () => dispatch => {
  removeToken();
  localStorage.removeItem('token');
  dispatch({ type: USER_LOGOUT });
  window.location.href = '/';
  window.location.reload();
};

export const getUserInfo = () => dispatch => {
  api
    .get('/account/profile/')
    .then(res => {
      dispatch({ type: GET_USER_INFO, payload: res.data });
    })
    .catch(err => {});
};
