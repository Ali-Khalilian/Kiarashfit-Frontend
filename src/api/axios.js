import axios from "axios";
export const BASE_URL = "http://localhost:3500";
// export const BASE_URL = "https://kiarashfit.liara.run";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});