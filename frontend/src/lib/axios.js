/**
 * Axios instance with automatic JWT token attachment for all requests
 */

import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "production" ? "/api" : "http://localhost:5001/api";

const api = axios.create({
  baseURL: BASE_URL,
});

// Auto-attach JWT token from localStorage to all requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
