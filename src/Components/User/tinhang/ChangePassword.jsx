import React, { useState } from "react";
import { message } from "antd";
import api from "../../../Api/api";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.currentPassword || !formData.newPassword || !formData.confirmPassword) {
      message.error("Vui lòng điền đầy đủ thông tin");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      message.error("Mật khẩu mới không khớp");
      return;
    }

    if (formData.newPassword.length < 6) {
      message.error("Mật khẩu mới phải có ít nhất 6 ký tự");
      return;
    }

    setLoading(true);
    try {
      const response = await api.changePassword(formData.currentPassword, formData.newPassword);
      if (response.message) {
        message.success("Đổi mật khẩu thành công");
        // Reset form
        setFormData({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      message.error(error.response?.data?.message || "Có lỗi xảy ra");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">Đổi Mật Khẩu</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-600 font-medium mb-2" htmlFor="currentPassword">
            Mật khẩu hiện tại
          </label>
          <input
            type="password"
            id="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập mật khẩu hiện tại"
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium mb-2" htmlFor="newPassword">
            Mật khẩu mới
          </label>
          <input
            type="password"
            id="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập mật khẩu mới"
          />
        </div>

        {/* Nhập lại mật khẩu mới */}
        <div>
          <label className="block text-gray-600 font-medium mb-2" htmlFor="confirmPassword">
            Xác nhận mật khẩu mới
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập lại mật khẩu mới"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Đang xử lý..." : "Lưu Thay Đổi"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
