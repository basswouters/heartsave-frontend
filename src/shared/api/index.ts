import axios, { AxiosRequestConfig } from 'axios';

const API_URL = window.API_URL;

const axiosConfig: AxiosRequestConfig = {
  baseURL: API_URL + 'api',
  timeout: 3000,
};

export const api = axios.create(axiosConfig);

api.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  },
);
