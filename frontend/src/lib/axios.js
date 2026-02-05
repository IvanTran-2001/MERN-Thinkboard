import axios from "axios";

// In production, the frontend will be served from the same origin as the backend.
const BASE_URL = import.meta.env.MODE === "production" ? "http://localhost:5001" : "/api";
const api = axios.create({
  baseURL: BASE_URL,
});

export default api;