import React, { useState, useEffect } from "react";
import { message } from "antd";
import api from "../../../Api/api";

const ChangeEmail = () => {
  const [formData, setFormData] = useState({
    newEmail: "",
    verificationCode: "",
  });
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await api.getUserInfo();
        setUserInfo(response.user);
      } catch (error) {
        message.error("Không thể lấy thông tin người dùng");
      }
    };
    fetchUserInfo();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleGetCode = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      message.success("Mã xác nhận đã được gửi");
      setStep(2);
    } catch (error) {
      message.error("Có lỗi xảy ra khi gửi mã");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (step === 2) {
      if (!formData.verificationCode || !formData.newEmail) {
        message.error("Vui lòng điền đầy đủ thông tin");
        return;
      }

      if (formData.verificationCode !== "123456") {
        message.error("Mã xác nhận không đúng");
        return;
      }

      if (formData.newEmail === userInfo?.email) {
        message.error("Email mới phải khác email hiện tại");
        return;
      }

      setLoading(true);
      try {
        const response = await api.changeEmail(formData.newEmail);
        if (response.message) {
          message.success("Thay đổi email thành công");
          // Reset form và cập nhật userInfo
          setFormData({
            newEmail: "",
            verificationCode: "",
          });
          setStep(1);
          // Cập nhật lại userInfo để hiển thị email mới
          const updatedUserInfo = await api.getUserInfo();
          setUserInfo(updatedUserInfo.user);
        }
      } catch (error) {
        message.error(error.response?.data?.message || "Có lỗi xảy ra khi thay đổi email");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">Thay Đổi Email</h2>
      
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          Email hiện tại
        </label>
        <input
          type="email"
          value={userInfo?.email || ""}
          disabled
          className="w-full px-4 py-2 border rounded bg-gray-100 text-gray-700"
        />
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <button
              type="button"
              onClick={handleGetCode}
              disabled={loading}
              className={`w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 
                focus:outline-none focus:ring-2 focus:ring-blue-500 
                ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {loading ? "Đang xử lý..." : "Lấy Mã Xác Nhận"}
            </button>
          </div>
        )}

        {step === 2 && (
          <>
            <div>
              <label className="block text-gray-600 font-medium mb-2" htmlFor="verificationCode">
                Mã xác nhận
              </label>
              <input
                type="text"
                id="verificationCode"
                value={formData.verificationCode}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập mã xác nhận (123456)"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-2" htmlFor="newEmail">
                Email mới
              </label>
              <input
                type="email"
                id="newEmail"
                value={formData.newEmail}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập email mới"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 
                  ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {loading ? "Đang xử lý..." : "Xác Nhận Thay Đổi"}
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default ChangeEmail;
