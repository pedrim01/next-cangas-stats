import axios from "axios";

export const apiAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export const apiAxiosBackend = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_BACKEND,
});
