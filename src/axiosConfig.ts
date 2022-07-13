// This page contains axois config with Authorization

import axios from 'axios';
const apiBaseUrl = process.env.REACT_APP_BASE_URL;
const withAuthInstance = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

withAuthInstance.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      // localStorage.clear(); // use this if needed. this will remove all items from localstorage
      delete withAuthInstance.defaults.headers.common.Authorization;
    }
    return config;
  },

  (error) => console.error(error)
);

export default withAuthInstance;
