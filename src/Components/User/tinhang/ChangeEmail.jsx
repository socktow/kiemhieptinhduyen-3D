import React from "react";

const ChangeEmail = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">Thay Đổi Email</h2>
      <form className="space-y-4">
        {/* Email cũ */}
        <div>
          <label className="block text-gray-600 font-medium mb-2" htmlFor="oldEmail">
            Email cũ
          </label>
          <input
            type="email"
            id="oldEmail"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập email cũ"
          />
        </div>

        {/* Email mới */}
        <div>
          <label className="block text-gray-600 font-medium mb-2" htmlFor="newEmail">
            Email mới
          </label>
          <input
            type="email"
            id="newEmail"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập email mới"
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

export default ChangeEmail;
