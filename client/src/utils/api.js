import axios from 'axios'
import { getToken } from "./token";

const token = getToken()

const api = axios.create({
  baseURL: '/api',
});

(() => {
  if(token) {
    api.defaults.headers.common['Authorization'] = `Token ${token}`
  } else {
    delete api.defaults.headers.common['Authorization']
  }
})()


export default api