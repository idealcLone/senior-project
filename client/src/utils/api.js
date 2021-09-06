import axios from 'axios'
import { getToken } from "./token";

const addToken = config => {
  const token = getToken()

  config.headers.Authorization = `Bearer ${token}`;
  config.headers.Accept = 'application/json; version=1.0';

  return config;
}

const api = axios.create({
  baseURL: '/api',
});

api.interceptors.request.use(addToken);

export default api