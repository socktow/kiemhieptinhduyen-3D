import apiCall from "./apiCall";

const api = {
  uploadImage: (image) => {
    const formData = new FormData();
    formData.append("image", image);
    return apiCall("admin/upload", formData, "POST");
  },
  createArticle: (articleData) => apiCall("admin/create-article", articleData),
  getArticles: () => apiCall("admin/articles", {}, "GET"),
  getAllUsers: () => apiCall("admin/users", {}, "GET"),
  getUserById: (userId) => apiCall(`admin/user/${userId}`, {}, "GET"),
  updateUser: (userId, updateData) => apiCall(`admin/user/${userId}`, updateData, "PATCH"),
  deleteUser: (userId) => apiCall(`admin/user/${userId}`, {}, "DELETE"),
  AddAccount: () => apiCall("admin/add-account", {}, "POST"),
  getGiftcodes: () => apiCall("admin/giftcode", {}, "GET"),
  taoGiftcode: (giftcodeData) => apiCall("admin/create-giftcode", giftcodeData, "POST"),
};

export default api;
