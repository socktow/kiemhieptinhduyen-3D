import React, { useState, useEffect } from "react";
import axios from "axios";

const Giftcode = () => {
  const [selectedTab, setSelectedTab] = useState("Nhập Giftcode");
  const [giftcodes, setGiftcodes] = useState([]); // Lưu danh sách giftcode
  const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu

  // Lấy danh sách giftcode từ API
  useEffect(() => {
    const fetchGiftcodes = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/giftcode");
        setGiftcodes(response.data);
      } catch (error) {
        console.error("Error fetching giftcodes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGiftcodes();
  }, []);

  // Phân loại giftcode đã sử dụng và chưa sử dụng
  const usedGiftcodes = giftcodes.filter((giftcode) => giftcode.usage <= 0);
  const unusedGiftcodes = giftcodes.filter((giftcode) => giftcode.usage > 0);

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">Quản Lý Giftcode</h2>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-5">
        {[
          "Nhập Giftcode",
          "Tất cả giftcode",
          "Giftcode đã sử dụng",
          "Giftcode chưa sử dụng",
        ].map((tab) => (
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
        ))}
      </div>

      {/* Nội dung hiển thị */}
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
        {selectedTab === "Tất cả giftcode" && (
          loading ? (
            <p>Đang tải dữ liệu...</p>
          ) : (
            <table className="w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">Mã</th>
                  <th className="border border-gray-300 px-4 py-2">Lượt sử dụng</th>
                  <th className="border border-gray-300 px-4 py-2">Hạn</th>
                </tr>
              </thead>
              <tbody>
                {giftcodes.map((giftcode, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">{giftcode.code}</td>
                    <td className="border border-gray-300 px-4 py-2">{giftcode.usage}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      {new Date(giftcode.expiryDate).toLocaleDateString("vi-VN")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
        )}
        {selectedTab === "Giftcode đã sử dụng" && (
          loading ? (
            <p>Đang tải dữ liệu...</p>
          ) : (
            <table className="w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">Tên</th>
                  <th className="border border-gray-300 px-4 py-2">Mã</th>
                </tr>
              </thead>
              <tbody>
                {usedGiftcodes.length > 0 ? (
                  usedGiftcodes.map((giftcode, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2">{giftcode.name}</td>
                      <td className="border border-gray-300 px-4 py-2">{giftcode.code}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="text-center py-4">Không có giftcode đã sử dụng.</td>
                  </tr>
                )}
              </tbody>
            </table>
          )
        )}
        {selectedTab === "Giftcode chưa sử dụng" && (
          loading ? (
            <p>Đang tải dữ liệu...</p>
          ) : (
            <table className="w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">Tên</th>
                  <th className="border border-gray-300 px-4 py-2">Mã</th>
                </tr>
              </thead>
              <tbody>
                {unusedGiftcodes.length > 0 ? (
                  unusedGiftcodes.map((giftcode, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2">{giftcode.name}</td>
                      <td className="border border-gray-300 px-4 py-2">{giftcode.code}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="text-center py-4">Không có giftcode chưa sử dụng.</td>
                  </tr>
                )}
              </tbody>
            </table>
          )
        )}
      </div>
    </div>
  );
};

export default Giftcode;
