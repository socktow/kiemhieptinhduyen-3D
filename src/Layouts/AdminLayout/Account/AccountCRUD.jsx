import React from "react";

const AccountCRUD = () => {
  const data = [
    {
      userid: 10,
      username: "admin",
      email: "admin1@gmail.com",
      password: "******",
      gameId: null,
      Cash: 50000,
      CashFree: 500000,
      MocNap: 0,
    },
    {
      userid: 11,
      username: "user01",
      email: "user01@gmail.com",
      password: "******",
      gameId: "game001",
      Cash: 10000,
      CashFree: 200000,
      MocNap: 1000,
    },
    {
      userid: 12,
      username: "user02",
      email: "user02@gmail.com",
      password: "******",
      gameId: "game002",
      Cash: 15000,
      CashFree: 300000,
      MocNap: 500,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Quản Lý Tài Khoản</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">UserID</th>
              <th className="border border-gray-300 px-4 py-2">Username</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Password</th>
              <th className="border border-gray-300 px-4 py-2">Game ID</th>
              <th className="border border-gray-300 px-4 py-2">Cash</th>
              <th className="border border-gray-300 px-4 py-2">Cash Free</th>
              <th className="border border-gray-300 px-4 py-2">Mốc Nạp</th>
              <th className="border border-gray-300 px-4 py-2">Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="bg-white hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">{item.userid}</td>
                <td className="border border-gray-300 px-4 py-2">{item.username}</td>
                <td className="border border-gray-300 px-4 py-2">{item.email}</td>
                <td className="border border-gray-300 px-4 py-2">{item.password}</td>
                <td className="border border-gray-300 px-4 py-2">{item.gameId || "N/A"}</td>
                <td className="border border-gray-300 px-4 py-2">{item.Cash}</td>
                <td className="border border-gray-300 px-4 py-2">{item.CashFree}</td>
                <td className="border border-gray-300 px-4 py-2">{item.MocNap}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600">
                    Chỉnh Sửa
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
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

export default AccountCRUD;
