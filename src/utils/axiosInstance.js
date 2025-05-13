import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.100.108:1337/api",
  timeout: 6000,
});

export const axiosInstance = instance;