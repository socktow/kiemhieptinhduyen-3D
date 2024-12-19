// apiCall.js
import axios from "axios";

const BASE_URL = "https://kiemhieptinhduyen.cloud";

const apiCall = async (endpoint, data = {}, method = "POST", headers = {}) => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      headers["token"] = token;
    }
    const isFormData = data instanceof FormData;
    const config = {
      headers: {
        ...headers,
        ...(isFormData ? { "Content-Type": "multipart/form-data" } : {}),
      },
    };
    let response;
    if (method === "POST") {
      response = await axios.post(`${BASE_URL}/${endpoint}`, data, config);
    } else if (method === "GET") {
      response = await axios.get(`${BASE_URL}/${endpoint}`, { headers });
    } else if (method === "PATCH") {
      response = await axios.patch(`${BASE_URL}/${endpoint}`, data, config);
    } else if (method === "DELETE") {
      response = await axios.delete(`${BASE_URL}/${endpoint}`, { headers });
    }
    return response.data;
  } catch (error) {
    console.error(`Error with ${endpoint}:`, error.response?.data || error.message);
    throw error;
  }
};

export default apiCall;
