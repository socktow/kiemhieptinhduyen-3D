import axios from "axios";

const BASE_URL = "http://localhost:4000";

const apiCall = async (endpoint, method = "GET", data = {}, headers = {}) => {
  try {
    const response = await axios({
      url: `${BASE_URL}/${endpoint}`,
      method,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    console.error(`Error with ${endpoint}:`, error);
    throw error;
  }
};

const api = {
  register: (username, email, password) =>
    apiCall("api/register", "POST", { username, email, password }),
  login: (data) => apiCall("api/login", "POST", data),
  getUserInfo: () =>
    apiCall("api/profile", "GET", {}, { token: localStorage.getItem("token") }),
  changePassword: (currentPassword, newPassword) =>
    apiCall(
      "api/profile",
      "PATCH",
      { currentPassword, newPassword },
      { token: localStorage.getItem("token") }
    ),
  changeEmail: (newEmail) =>
    apiCall(
      "api/profile",
      "PATCH",
      { email: newEmail },
      { token: localStorage.getItem("token") }
    ),
    linkGameId: (gameId) =>
      apiCall(
        "api/profile/gameId",
        "PATCH",
        { gameId },
        { token: localStorage.getItem("token") }
      ),
};

export default api;
