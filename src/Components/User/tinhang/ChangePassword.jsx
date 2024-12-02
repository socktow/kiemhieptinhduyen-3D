import React from "react";

const ChangePassword = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">Đổi Mật Khẩu</h2>
      <form className="space-y-4">
        {/* Mật khẩu cũ */}
        <div>
          <label className="block text-gray-600 font-medium mb-2" htmlFor="oldPassword">
            Mật khẩu cũ
          </label>
          <input
            type="password"
            id="oldPassword"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập mật khẩu cũ"
          />
        </div>

        {/* Mật khẩu mới */}
        <div>
          <label className="block text-gray-600 font-medium mb-2" htmlFor="newPassword">
            Mật khẩu mới
          </label>
          <input
            type="password"
            id="newPassword"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập mật khẩu mới"
          />
        </div>

        {/* Nhập lại mật khẩu mới */}
        <div>
          <label className="block text-gray-600 font-medium mb-2" htmlFor="confirmPassword">
            Nhập lại mật khẩu mới
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập lại mật khẩu mới"
          />
        </div>

        {/* Nút lưu */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Lưu Thay Đổi
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
