import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const baseUrl = 'https://dummyjson.com/';

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 60000,
  header: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
  },
});
export const axiosInstanceConfig = axios.create({
  baseURL: baseUrl,
  timeout: 60000,
});

const successResponse = response => response;

const errorResponse = error => Promise.reject(error);
const setHeaders = async reqConfig => {
  const data = await AsyncStorage.getItem('token');

  reqConfig.headers.Authorization = 'Bearer ' + data;
  reqConfig.headers['Content-Type'] = 'application/json';
  return reqConfig;
};

axiosInstance.interceptors.response.use(successResponse);
axiosInstanceConfig.interceptors.response.use(successResponse);

axiosInstanceConfig.interceptors.request.use(setHeaders);
