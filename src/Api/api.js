import axios from "axios";

const BASE_URL = "http://localhost:4000";

// Hàm gọi API chung
const apiCall = async (endpoint, data = {}, method = "POST") => {
  try {
    const response =
      method === "POST"
        ? await axios.post(`${BASE_URL}/${endpoint}`, data)
        : await axios.get(`${BASE_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(`Error with ${endpoint}:`, error);
    throw error;
  }
};

const api = {
  // Payment
  createMomoPayment: (amount, orderInfo) =>
    apiCall("momo/payment", { amount, orderInfo }),
  checkMomoPayment: (orderId) =>
    apiCall("momo/checkmomopayment", { orderId }),
  createZaloPayment: ({ amount, productName, productDescription }) =>
    apiCall("zalo/payment", { amount, productName, productDescription }),
  checkZaloPayment: (app_trans_id) =>
    apiCall("zalo/checkzalopayment", { app_trans_id }),

  // Authentication
  register: (username, email, password) =>
    apiCall("api/register", { username, email, password }),
  login: (username, password) =>
    apiCall("api/login", { username, password }),

  // Get User by Username
  getUserInfo: (username) => apiCall(`api/user/${username}`, {}, "GET"),
};

export default api;
