import axios from 'axios'
import { getToken, setToken } from "./token";

const api = axios.create({
  baseURL: '/api',
});

api.interceptors.response.use(
  response => response,
  error => {
    const originalRequest = error.config
    const refreshToken = getToken()
    if (error.response.status === 403) {
      return api
        .get('/account/refresh/', {
          params: {
            token: refreshToken
          }
        })
        .then(res => {
          if (res.status === 200) {
            localStorage.setItem('token', res.data)

            return api(originalRequest)
          } else {
            window.location.href = '/login'
          }
        })
    }
  }
)

export default api