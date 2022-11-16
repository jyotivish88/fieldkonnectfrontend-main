import axios from "axios"
const API_URL = "http://3.109.210.206/api"
import { getAuthToken } from "./authHelper"

const axiosApi = axios.create({
  baseURL: API_URL,
})

axiosApi.interceptors.request.use(async function (config) {
  const token = await getAuthToken();
  config.headers.Authorization =  `Bearer ${JSON.parse(token)}`;
  return config;
});

axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export async function get(url, config = {}) {
  return await axiosApi.get(url, { ...config }).then(response => response.data)
}

export async function post(url, data, config = {}) {
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function patch(url, data, config = {}) {
    return axiosApi
      .patch(url, { ...data }, { ...config })
      .then(response => response.data)
  }

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then(response => response.data)
}

