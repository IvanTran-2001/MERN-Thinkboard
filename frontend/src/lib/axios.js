import axios from "axios";

// In production, the frontend will be served from the same origin as the backend.
const BASE_URL =
  import.meta.env.MODE === "production" ? "/api" : "http://localhost:5001/api";
const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
