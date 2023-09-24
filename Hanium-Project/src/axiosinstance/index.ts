import axios, { AxiosRequestConfig } from 'axios';

import { baseUrl } from './constants';

export function getJWTHeader(): Record<string, string> {
  return { Authorization: `Bearer ${localStorage.getItem('user')}` };
}

const config: AxiosRequestConfig = { baseURL: baseUrl };
export const axiosInstance = axios.create(config);
