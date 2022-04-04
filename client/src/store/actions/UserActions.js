import { USER_LOGOUT } from '../types/UserTypes';

import { removeToken } from '../../utils/token';

export const userLogout = () => dispatch => {
  removeToken();
  localStorage.removeItem('token');
  dispatch({ type: USER_LOGOUT });
  window.location.href = '/';
  window.location.reload();
};
