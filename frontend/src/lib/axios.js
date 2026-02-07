/**
 * Axios instance with automatic JWT token attachment for all requests
 */

import axios from "axios";

// Dynamically determine backend URL based on current hostname
const getBaseURL = () => {
  if (import.meta.env.MODE === "production") {
    return "/api";
  }
  
  // Development: Use current hostname (works for localhost AND network IP)
  const hostname = window.location.hostname;
  return `http://${hostname}:5001/api`;
};

const BASE_URL = getBaseURL();

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
