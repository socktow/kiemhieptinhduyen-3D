import React, { useState } from "react";

const RateNapThe = () => {
  // Dữ liệu mẫu ban đầu
  const [rates, setRates] = useState([
    { denomination: 200000, bonus: 50, converted: 300000 },
    { denomination: 100000, bonus: 30, converted: 130000 },
  ]);

  // State để thêm mới rate
  const [newRate, setNewRate] = useState({
    denomination: "",
    bonus: "",
    converted: "",
  });

  // Xử lý thêm rate mới
  const handleAddRate = () => {
    if (
      newRate.denomination &&
      newRate.bonus &&
      newRate.converted &&
      !isNaN(newRate.denomination) &&
      !isNaN(newRate.bonus) &&
      !isNaN(newRate.converted)
    ) {
      setRates([...rates, { ...newRate, denomination: Number(newRate.denomination), bonus: Number(newRate.bonus), converted: Number(newRate.converted) }]);
      setNewRate({ denomination: "", bonus: "", converted: "" }); // Reset form
    } else {
      alert("Vui lòng nhập đầy đủ thông tin và đúng định dạng!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full bg-white rounded shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Chỉnh Rate Nạp Thẻ</h2>
        <table className="w-full table-auto border-collapse border border-gray-300 mb-6">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">Mệnh Giá (VND)</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Khuyến Mãi (%)</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Coin Quy Đổi (Cash)</th>
            </tr>
          </thead>
          <tbody>
            {rates.map((rate, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <td className="border border-gray-300 px-4 py-2">{rate.denomination.toLocaleString()} VND</td>
                <td className="border border-gray-300 px-4 py-2">{rate.bonus} %</td>
                <td className="border border-gray-300 px-4 py-2">{rate.converted.toLocaleString()} Cash</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 className="text-xl font-bold mb-4">Thêm Rate Nạp Thẻ</h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <input
              type="number"
              placeholder="Mệnh Giá (VND)"
              value={newRate.denomination}
              onChange={(e) => setNewRate({ ...newRate, denomination: e.target.value })}
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
            <input
              type="number"
              placeholder="Khuyến Mãi (%)"
              value={newRate.bonus}
              onChange={(e) => setNewRate({ ...newRate, bonus: e.target.value })}
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
            <input
              type="number"
              placeholder="Coin Quy Đổi (Cash)"
              value={newRate.converted}
              onChange={(e) => setNewRate({ ...newRate, converted: e.target.value })}
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
          </div>
          <button
            onClick={handleAddRate}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
          >
            Thêm Rate
          </button>
        </div>
      </div>
    </div>
  );
};

export default RateNapThe;
