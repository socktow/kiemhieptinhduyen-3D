import axios from "axios";

const BASE_URL = "http://localhost:4000";
const getToken = () => localStorage.getItem("token");

const apiCall = async (endpoint, method = "GET", data = {}, headers = {}) => {
  try {
    const response = await axios({
      url: `${BASE_URL}/${endpoint}`,
      method,
      data,
      headers: { ...headers, token: getToken() },
    });
    return response.data;
  } catch (error) {
    console.error(`Error with ${endpoint}:`, error);
    throw error;
  }
};

const api = {
  register: (username, email, password) => apiCall("api/register", "POST", { username, email, password }),
  login: (data) => apiCall("api/login", "POST", data),
  getUserInfo: () => apiCall("api/profile", "GET"),
  changePassword: (currentPassword, newPassword) => apiCall("api/profile", "PATCH", { currentPassword, newPassword }),
  changeEmail: (newEmail) => apiCall("api/profile", "PATCH", { email: newEmail }),
  getGameId: (gameId) => apiCall(`game/member/${gameId}`, "GET"),
  getarticles: () => apiCall("api/articles", "GET"),
};

export default api;
