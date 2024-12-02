import React, { useState } from 'react';

const MocNap = () => {
  const [selectedOption, setSelectedOption] = useState('week');
  const [claimedMilestones, setClaimedMilestones] = useState([]);
  const currentMonth = new Date().getMonth() + 1; 
  const currentYear = new Date().getFullYear();
  const lastDayOfMonth = new Date(currentYear, currentMonth, 0).getDate();
  const formatNumber = (num) => {
    if (num >= 1_000_000) return `${num / 1_000_000}m`;
    if (num >= 1_000) return `${num / 1_000}k`;
    return num.toString();
  };
  const tiennap = 500000;
  const milestones = {
    week: [
      { id: 1, type: 20000, promotion: 5000, status: 'Chưa Nhận' },
      { id: 2, type: 50000, promotion: 10000, status: 'Chưa Nhận' },
      { id: 3, type: 100000, promotion: 20000, status: 'Chưa Nhận' },
      { id: 4, type: 200000, promotion: 50000, status: 'Chưa Nhận' },
      { id: 5, type: 500000, promotion: 100000, status: 'Chưa Nhận' },
    ],
    month: [
      { id: 1, type: 100000, promotion: 20000, status: 'Chưa Nhận' },
      { id: 2, type: 200000, promotion: 50000, status: 'Chưa Nhận' },
      { id: 3, type: 500000, promotion: 100000, status: 'Chưa Nhận' },
      { id: 4, type: 1000000, promotion: 500000, status: 'Chưa Nhận' },
      { id: 5, type: 2000000, promotion: 1000000, status: 'Chưa Nhận' },
      { id: 6, type: 5000000, promotion: 2500000, status: 'Chưa Nhận' },
      { id: 7, type: 10000000, promotion: 5000000, status: 'Chưa Nhận' },
    ],
  };

  const handleClaim = (id) => {
    if (!claimedMilestones.includes(id)) {
      setClaimedMilestones([...claimedMilestones, id]);
      alert(`Milestone ID ${id} claimed successfully!`);
    }
  };

  const renderMilestones = () => {
    return milestones[selectedOption].map((milestone) => (
      <tr key={milestone.id} className="border-b">
        <td className="p-2 text-center">{milestone.id}</td>
        <td className="p-2 text-center">{formatNumber(milestone.type)}</td>
        <td className="p-2 text-center">{formatNumber(milestone.promotion)}</td>
        <td className="p-2 text-center">
          {claimedMilestones.includes(milestone.id) ? (
            <span className="text-green-500 font-bold">Đã Nhận</span>
          ) : (
            <button
              onClick={() => handleClaim(milestone.id)}
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Nhận
            </button>
          )}
        </td>
      </tr>
    ));
  };

  return (
    <div className="p-5 bg-gray-100 rounded shadow-md">
      <h3 className="text-xl font-bold mb-4">Bạn Đã Nạp : ${tiennap}</h3>
      <p className="mb-4">
        Chu Kỳ Nạp: 01/{currentMonth}/{currentYear} - {lastDayOfMonth}/{currentMonth}/{currentYear}
      </p>

      <div className="mb-4">
        <label className="font-semibold mr-2">Chọn Loại Mốc Nạp:</label>
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="week">Mốc Nạp Tuần</option>
          <option value="month">Mốc Nạp Tháng</option>
        </select>
      </div>

      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Loại Mốc Nạp</th>
            <th className="border p-2">Khuyến Mãi</th>
            <th className="border p-2">Trạng Thái</th>
          </tr>
        </thead>
        <tbody>{renderMilestones()}</tbody>
      </table>
    </div>
  );
};

export default MocNap;
