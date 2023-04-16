import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: "https://motor-media-backend.herokuapp.com/api",
  // baseURL: "https://motor-media-backend.herokuapp.com/api",
  baseURL: "http://localhost:8000/",
});
