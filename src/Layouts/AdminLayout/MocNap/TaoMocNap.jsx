import React, { useState } from "react";

const TaoMocNap = () => {
  // Dữ liệu mẫu
  const [mocNapData, setMocNapData] = useState([
    { id: "MN001", name: "Mốc Nạp VIP", vnd: 200000, item: "Item VIP" },
    { id: "MN002", name: "Mốc Nạp Thường", vnd: 100000, item: "Item Basic" },
  ]);

  // Xử lý xóa mốc nạp
  const handleDelete = (id) => {
    const updatedData = mocNapData.filter((moc) => moc.id !== id);
    setMocNapData(updatedData);
  };

  // Placeholder chỉnh sửa (cần thêm logic nếu cần)
  const handleEdit = (id) => {
    alert(`Chỉnh sửa mốc nạp có ID: ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full bg-white rounded shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Tạo Mốc Nạp</h2>

        {/* Bảng danh sách mốc nạp */}
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">Id Mốc Nạp</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Tên Mốc Nạp</th>
              <th className="border border-gray-300 px-4 py-2 text-left">VND</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Item</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            {mocNapData.map((moc, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <td className="border border-gray-300 px-4 py-2">{moc.id}</td>
                <td className="border border-gray-300 px-4 py-2">{moc.name}</td>
                <td className="border border-gray-300 px-4 py-2">{moc.vnd.toLocaleString()} VND</td>
                <td className="border border-gray-300 px-4 py-2">{moc.item}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleEdit(moc.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
                  >
                    Chỉnh Sửa
                  </button>
                  <button
                    onClick={() => handleDelete(moc.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Form thêm mốc nạp */}
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-4">Thêm Mốc Nạp Mới</h3>
          <form className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Tên Mốc Nạp"
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
              <input
                type="number"
                placeholder="VND"
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
              <input
                type="text"
                placeholder="Item"
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-2 py-2 rounded hover:bg-green-600 min-w-3.5"
            >
              Thêm Mốc Nạp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaoMocNap;
