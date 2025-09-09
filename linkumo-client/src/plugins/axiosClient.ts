import axios, { type AxiosInstance } from 'axios'

const API_URL = import.meta.env.VITE_API_BASE_PATH

export const axiosClient: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: API_URL
})
