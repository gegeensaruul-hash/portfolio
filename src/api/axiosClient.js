// API configuration - similar to axiosClient.js in enhanced-shop
// This can be used for making HTTP requests to backend services

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const apiClient = {
  baseURL: API_BASE_URL,
  // Add axios or fetch configuration here
};

export default apiClient;
