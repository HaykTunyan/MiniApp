import {axiosInstance} from './config';

export const signIn_req = async state => {
  const username = state?.username;
  const password = state.password;
  const response = await axiosInstance.post(`auth/login`, {
    username,
    password,
  });
  return response.data;
};
