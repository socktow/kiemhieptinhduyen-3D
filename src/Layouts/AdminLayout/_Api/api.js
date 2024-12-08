import axios from "axios";

const BASE_URL = "http://localhost:4000";

// Helper function for API call
const apiCall = async (endpoint, data = {}, method = "POST", headers = {}) => {
  try {
    const response = method === "POST"
      ? await axios.post(`${BASE_URL}/${endpoint}`, data, { headers })
      : await axios.get(`${BASE_URL}/${endpoint}`, { headers });
    return response.data;
  } catch (error) {
    console.error(`Error with ${endpoint}:`, error);
    throw error;
  }
};

const api = {
  uploadImage: async (image) => {
    const formData = new FormData();
    formData.append("image", image);
    try {
      const response = await fetch(`${BASE_URL}/admin/upload`, {
        method: "POST",
        body: formData,
      });
      return await response.json();
    } catch (error) {
      throw new Error("Error uploading image");
    }
  },

  createArticle: (articleData) => apiCall("admin/create-article", articleData),
};

export default api;
