import React from "react";

const GiftCodeHistory = () => {
  // Dữ liệu mẫu
  const historyData = [
    {
      userId: 1,
      username: "playerOne",
      gameId: "game123",
      giftcode: "GIFT2024",
      date: "2024-12-08",
    },
    {
      userId: 2,
      username: "playerTwo",
      gameId: "game456",
      giftcode: "GIFT5678",
      date: "2024-12-09",
    },
    {
      userId: 3,
      username: "playerThree",
      gameId: "game789",
      giftcode: "GIFT9012",
      date: "2024-12-09",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full bg-white rounded shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Lịch Sử Nhập GiftCode</h2>
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">User ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Username</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Game ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">GiftCode</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Ngày</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((entry, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <td className="border border-gray-300 px-4 py-2">{entry.userId}</td>
                <td className="border border-gray-300 px-4 py-2">{entry.username}</td>
                <td className="border border-gray-300 px-4 py-2">{entry.gameId}</td>
                <td className="border border-gray-300 px-4 py-2">{entry.giftcode}</td>
                <td className="border border-gray-300 px-4 py-2">{entry.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GiftCodeHistory;
