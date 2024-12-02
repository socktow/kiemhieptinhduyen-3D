import React, { useState } from "react";

const Giftcode = () => {
  const [selectedTab, setSelectedTab] = useState("Nhập Giftcode");

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">Quản Lý Giftcode</h2>
      
      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-5">
        {["Nhập Giftcode", "Tất cả giftcode", "Giftcode đã sử dụng", "Giftcode chưa sử dụng"].map(
          (tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded ${
                selectedTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          )
        )}
      </div>

      {/* Content */}
      <div className="bg-gray-100 p-5 rounded">
        {selectedTab === "Nhập Giftcode" && (
          <form>
            <label className="block text-gray-600 font-medium mb-2" htmlFor="giftcode">
              Nhập mã Giftcode
            </label>
            <input
              type="text"
              id="giftcode"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              placeholder="Nhập giftcode của bạn"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Sử Dụng Giftcode
            </button>
          </form>
        )}
        {selectedTab === "Tất cả giftcode" && <p>Danh sách tất cả các giftcode sẽ hiển thị tại đây.</p>}
        {selectedTab === "Giftcode đã sử dụng" && <p>Danh sách giftcode đã sử dụng sẽ hiển thị tại đây.</p>}
        {selectedTab === "Giftcode chưa sử dụng" && <p>Danh sách giftcode chưa sử dụng sẽ hiển thị tại đây.</p>}
      </div>
    </div>
  );
};

export default Giftcode;
