import React, { useState } from "react";

const AddCoin = () => {
  const [usernameList, setUsernameList] = useState("");
  const [cashToAdd, setCashToAdd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const usernames = usernameList.split(",").map((username) => username.trim());
    console.log("Usernames:", usernames);
    console.log("Cash to Add:", cashToAdd);
    // Logic to handle API call to update user balances
    alert(`Cộng ${cashToAdd} xu cho các tài khoản: ${usernames.join(", ")}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-auto bg-white rounded shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Cộng Xu Tài Khoản</h2>
        <form onSubmit={handleSubmit}>
          {/* Nhập Username */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Nhập Username(s)
            </label>
            <input
              type="text"
              value={usernameList}
              onChange={(e) => setUsernameList(e.target.value)}
              placeholder="Nhập username, cách nhau bằng dấu phẩy"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <p className="text-sm text-gray-500 mt-1">
              Ví dụ: user1, user2, user3
            </p>
          </div>

          {/* Nhập số Cash */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Số Cash được cộng thêm
            </label>
            <input
              type="number"
              value={cashToAdd}
              onChange={(e) => setCashToAdd(e.target.value)}
              placeholder="Nhập số cash cần cộng"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Nút Xác Nhận */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Xác Nhận
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoin;
