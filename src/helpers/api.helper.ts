import axios, { AxiosResponse } from "axios";

const REACT_APP_APP_URL = process.env.REACT_APP_APP_URL;

export const axiosAPI = axios.create({
  baseURL: REACT_APP_APP_URL,
});

axios.interceptors.request.use(
  (config) => {
    debugger;
    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => {
    debugger;
    return response;
  },
  (error) => Promise.reject(error)
);

export const get = async (
  url: string,
  config?: object
): Promise<AxiosResponse> => {
  const res = await axiosAPI.get(url, { ...config });
  return await res;
};
