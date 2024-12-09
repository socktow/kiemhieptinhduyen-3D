import React from "react";

const LichSuNapThe = () => {
    // Dữ liệu mẫu
  const rechargeHistory = [
    {
      userId: 1,
      username: "playerOne",
      gameId: "game123",
      denomination: 500000,
      convertedValue: 450000,
      paymentMethod: "MOMO",
      date: "2024-12-08",
    },
    {
      userId: 2,
      username: "playerTwo",
      gameId: "game456",
      denomination: 200000,
      convertedValue: 180000,
      paymentMethod: "ZALOPAY",
      date: "2024-12-09",
    },
    {
      userId: 3,
      username: "playerThree",
      gameId: "game789",
      denomination: 1000000,
      convertedValue: 950000,
      paymentMethod: "VISA",
      date: "2024-12-09",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full bg-white rounded shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Lịch Sử Nạp Thẻ</h2>
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">User ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Username</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Game ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Mệnh Giá</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Giá Trị Quy Đổi</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Thanh Toán</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Ngày</th>
            </tr>
          </thead>
          <tbody>
            {rechargeHistory.map((entry, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <td className="border border-gray-300 px-4 py-2">{entry.userId}</td>
                <td className="border border-gray-300 px-4 py-2">{entry.username}</td>
                <td className="border border-gray-300 px-4 py-2">{entry.gameId}</td>
                <td className="border border-gray-300 px-4 py-2">{entry.denomination} VND</td>
                <td className="border border-gray-300 px-4 py-2">{entry.convertedValue} VND</td>
                <td className="border border-gray-300 px-4 py-2">{entry.paymentMethod}</td>
                <td className="border border-gray-300 px-4 py-2">{entry.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LichSuNapThe;
