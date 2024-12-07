import axios from "axios";

const BASE_URL = "https://kiemhieptinhduyen.cloud";

// Hàm gọi API chung
const apiCall = async (endpoint, data = {}, method = "POST", headers = {}) => {
  try {
    const response =
      method === "POST"
        ? await axios.post(`${BASE_URL}/${endpoint}`, data, { headers })
        : await axios.get(`${BASE_URL}/${endpoint}`, { headers });
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
  login: (data) => apiCall("api/login", data),

  // Get User by Token
  getUserInfo: () =>
    axios.get(`${BASE_URL}/api/profile`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    }).then((response) => response.data),  
  
  changePassword: (currentPassword, newPassword) =>
    axios.patch(
      `${BASE_URL}/api/profile`,
      { currentPassword, newPassword },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    ).then((response) => response.data),
  changeEmail: (newEmail) =>
    axios.patch(
      `${BASE_URL}/api/profile`,
      { email: newEmail },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    ).then((response) => response.data),
};

export default api;
