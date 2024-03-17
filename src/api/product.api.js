import {axiosInstanceConfig} from './config';

export const getProducts_req = async () => {
  const response = await axiosInstanceConfig.get(`products`);
  return response.data;
};

export const getProductsItem_req = async id => {
  const response = await axiosInstanceConfig.get(`products/${id}`);
  return response.data;
};

export const getCategories_req = async () => {
  const response = await axiosInstanceConfig.get(`products/categories`);
  return response.data;
};

export const getCategoriesItem_req = async data => {
  const response = await axiosInstanceConfig.get(`products/category/${data}`);
  return response.data;
};

export const getProfile_req = async () => {
  const response = await axiosInstanceConfig.get(`auth/me`);
  return response.data;
};

export const search_req = async search => {
  const response = await axiosInstanceConfig.get(`products/search?${search}`);
  return response.data;
};
