import React from "react";

const GiftCodeList = () => {
  const giftCodes = [
    {
      name: "Test GiftCode 2",
      code: "hehee",
      usage: 5,
      expiryDate: "2024-12-12T23:59:59.999Z",
    },
    {
      name: "Spring Promo",
      code: "SPRING2024",
      usage: 10,
      expiryDate: "2024-12-31T23:59:59.999Z",
    },
  ];

  return (
    <div className="h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full max-w-auto bg-white rounded shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Danh Sách GiftCode</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">Tên GiftCode</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Mã Code</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Số Lần Sử Dụng</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Ngày Hết Hạn</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            {giftCodes.map((gift, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{gift.name}</td>
                <td className="border border-gray-300 px-4 py-2">{gift.code}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{gift.usage}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {new Date(gift.expiryDate).toLocaleDateString("vi-VN")}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-600">
                    Chỉnh Sửa
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GiftCodeList;
