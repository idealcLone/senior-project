import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const getToken = () => {
  return cookies.get('TOKEN');
};

export const setToken = (token) => {
  const date = new Date();
  date.setTime(date.getTime() + 59 * 60 * 1000);
  cookies.set('TOKEN', token, {
    path: '/',
    expires: date
  });
};

export const removeToken = () => {
  cookies.remove('TOKEN');
};
