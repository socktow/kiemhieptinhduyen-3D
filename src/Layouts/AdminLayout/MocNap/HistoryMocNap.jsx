import React from "react";

const HistoryMocNap = () => {
  // Dữ liệu mẫu
  const historyData = [
    {
      userId: 1,
      username: "playerOne",
      gameId: "G12345",
      idMocNap: "MN001",
      tenMocNap: "Mốc Nạp VIP",
      date: "2024-12-08",
    },
    {
      userId: 2,
      username: "playerTwo",
      gameId: "G67890",
      idMocNap: "MN002",
      tenMocNap: "Mốc Nạp Thường",
      date: "2024-12-09",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full bg-white rounded shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Lịch Sử Nhận Mốc Nạp</h2>
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">UserID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Username</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Game ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Id Mốc Nạp</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Tên Mốc Nạp</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Ngày</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <td className="border border-gray-300 px-4 py-2">{item.userId}</td>
                <td className="border border-gray-300 px-4 py-2">{item.username}</td>
                <td className="border border-gray-300 px-4 py-2">{item.gameId}</td>
                <td className="border border-gray-300 px-4 py-2">{item.idMocNap}</td>
                <td className="border border-gray-300 px-4 py-2">{item.tenMocNap}</td>
                <td className="border border-gray-300 px-4 py-2">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryMocNap;
