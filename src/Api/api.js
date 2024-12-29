import axios from "axios";

const BASE_URL = "https://kiemhieptinhduyen.cloud";
const getToken = () => localStorage.getItem("token");

const apiCall = async (endpoint, method = "GET", data = {}, headers = {}) => {
  try {
    const url = `${BASE_URL}/api/${endpoint}`;    
    const response = await axios({
      url,
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
  register: (username, email, password) => apiCall("register", "POST", { username, email, password }),
  login: (data) => apiCall("login", "POST", data),
  getUserInfo: () => apiCall("profile", "GET"),
  changePassword: (currentPassword, newPassword) => apiCall("profile", "PATCH", { currentPassword, newPassword }),
  changeEmail: (newEmail) => apiCall("profile", "PATCH", { email: newEmail }),
  getGameId: (gameId) => apiCall(`game/member/${gameId}`, "GET"),
  getarticles: () => apiCall("articles", "GET"),
  getarticlebyid: (id) => apiCall(`articles/${id}`, "GET"),
};

export default api;
