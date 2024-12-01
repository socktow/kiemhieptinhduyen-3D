import React, { useState } from 'react';

const User = () => {
  const [selectedOption, setSelectedOption] = useState("Thông Tin Tổng Thể");

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-gray-800 text-white p-5">
        <h2 className="text-xl font-bold mb-5">Trang User</h2>
        <ul>
          <li
            className={`cursor-pointer p-2 mb-2 hover:bg-gray-700 rounded ${selectedOption === "Thông Tin Tổng Thể" ? 'bg-gray-600' : ''}`}
            onClick={() => setSelectedOption("Thông Tin Tổng Thể")}
          >
            Thông Tin Tổng Thể
          </li>
          <li
            className={`cursor-pointer p-2 mb-2 hover:bg-gray-700 rounded ${selectedOption === "Thay Đổi Password" ? 'bg-gray-600' : ''}`}
            onClick={() => setSelectedOption("Thay Đổi Password")}
          >
            Thay Đổi Password
          </li>
          <li
            className={`cursor-pointer p-2 mb-2 hover:bg-gray-700 rounded ${selectedOption === "Thay Đổi Email" ? 'bg-gray-600' : ''}`}
            onClick={() => setSelectedOption("Thay Đổi Email")}
          >
            Thay Đổi Email
          </li>
          <li
            className={`cursor-pointer p-2 mb-2 hover:bg-gray-700 rounded ${selectedOption === "Nạp Tiền" ? 'bg-gray-600' : ''}`}
            onClick={() => setSelectedOption("Nạp Tiền")}
          >
            Nạp Tiền
          </li>
          <li
            className={`cursor-pointer p-2 mb-2 hover:bg-gray-700 rounded ${selectedOption === "GiftCode Đã Sử Dụng" ? 'bg-gray-600' : ''}`}
            onClick={() => setSelectedOption("GiftCode Đã Sử Dụng")}
          >
            GiftCode Đã Sử Dụng
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="w-full lg:w-3/4 p-10">
        <h3 className="text-2xl font-bold mb-5">{selectedOption}</h3>
        <div className="bg-white p-5 rounded shadow-md">
          {selectedOption === "Thông Tin Tổng Thể" && (
            <p>Thông tin tổng thể của người dùng sẽ được hiển thị ở đây.</p>
          )}
          {selectedOption === "Thay Đổi Password" && (
            <p>Chức năng thay đổi mật khẩu sẽ được hiển thị ở đây.</p>
          )}
          {selectedOption === "Thay Đổi Email" && (
            <p>Chức năng thay đổi email sẽ được hiển thị ở đây.</p>
          )}
          {selectedOption === "Nạp Tiền" && (
            <p>Chức năng nạp tiền sẽ được hiển thị ở đây.</p>
          )}
          {selectedOption === "GiftCode Đã Sử Dụng" && (
            <p>Danh sách giftcode đã sử dụng sẽ được hiển thị ở đây.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default User;
