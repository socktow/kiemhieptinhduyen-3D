import axios from "axios";

const BASE_URL = "http://localhost:4000";

// Chỉnh sửa apiCall để hỗ trợ upload file
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
      response = isFormData
        ? await axios.post(`${BASE_URL}/${endpoint}`, data, config) 
        : await axios.post(`${BASE_URL}/${endpoint}`, data, { headers });
    } else {
      response = await axios.get(`${BASE_URL}/${endpoint}`, { headers });
    }
    return response.data;
  } catch (error) {
    console.error(`Error with ${endpoint}:`, error);
    throw error;
  }
};

const api = {
  uploadImage: (image) => {
    const formData = new FormData();
    formData.append("image", image);
    return apiCall("admin/upload", formData, "POST");
  },
  createArticle: (articleData) => apiCall("admin/create-article", articleData),
  getArticles: () => apiCall("admin/articles", {}, "GET"),
};

export default api;
