import React, { useState } from "react";
import { useSelector } from "react-redux";
import api from "../../../Api/api";
import { useNavigate } from "react-router-dom";

const ChangeEmail = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    verificationCode: "",
    newEmail: "",
  });
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleGetCode = () => {
    setLoading(true);
    setError("");
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setSuccessMessage("Mã xác nhận đã được gửi đến email của bạn (123456).");
    }, 1000);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setSuccessMessage("");
    const { verificationCode, newEmail } = formData;

    setTimeout(async () => {
      setLoading(false);
      if (verificationCode !== "123456") {
        setError("Mã xác nhận không đúng. Vui lòng thử lại.");
        return;
      }

      if (!newEmail.includes("@") || newEmail.length < 5) {
        setError("Vui lòng nhập email hợp lệ.");
        return;
      }

      try {
        // Gọi API đổi email
        await api.changeEmail(newEmail);
        setSuccessMessage("Email đã được thay đổi thành công!");
        setTimeout(() => {
          // Chuyển hướng và refresh
          navigate("/home/user");
          window.location.reload();
        }, 1500);
      } catch (err) {
        setError("Đã xảy ra lỗi khi thay đổi email. Vui lòng thử lại.");
      }
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">Thay Đổi Email</h2>

      {successMessage && (
        <div className="mb-4 text-green-600 font-medium text-center">{successMessage}</div>
      )}

      {error && (
        <div className="mb-4 text-red-600 font-medium text-center">{error}</div>
      )}

      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Email hiện tại</label>
        <input
          type="email"
          value={userInfo?.email || ""}
          disabled
          className="w-full px-4 py-2 border rounded bg-gray-100 text-gray-700"
        />
      </div>

      <form className="space-y-4">
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
                type="button"
                onClick={handleSubmit}
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
