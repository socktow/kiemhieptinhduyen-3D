import React, { useState } from 'react';

const DoiKNB = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [confirmedOption, setConfirmedOption] = useState(null);

  const handleSelectionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleConfirm = () => {
    if (selectedOption) {
      setConfirmedOption(selectedOption);
      alert(`Bạn đã chọn ${selectedOption}!`);
    } else {
      alert('Vui lòng chọn một mốc để đổi!');
    }
  };

  return (
    <div className="p-5 bg-gray-100 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Trang Đổi KNB</h2>

      {/* Div Thứ Nhất: Đổi KNB */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-3">Chọn Mốc Đổi KNB</h3>
        <select
          value={selectedOption}
          onChange={handleSelectionChange}
          className="p-2 border rounded w-full"
        >
          <option value="">Chọn mốc</option>
          <option value="200 xu: 1.000.000 KNB">200 xu : 1.000.000 KNB</option>
          <option value="500 xu: 2.500.000 KNB (Bonus 10%)">
            500 xu : 2.500.000 KNB (Bonus 10%)
          </option>
          <option value="1,000 xu: 5.000.000 KNB (Bonus 20%)">
            1,000 xu : 5.000.000 KNB (Bonus 20%)
          </option>
          <option value="2,000 xu: 10.000.000 KNB (Bonus 30%)">
            2,000 xu : 10.000.000 KNB (Bonus 30%)
          </option>
          <option value="5,000 xu: 25.000.000 KNB (Bonus 40%)">
            5,000 xu : 25.000.000 KNB (Bonus 40%)
          </option>
        </select>
        <button
          onClick={handleConfirm}
          className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Xác Nhận Đổi
        </button>
      </div>

      {/* Div Thứ Hai: Mua Thẻ Tháng */}
      <div>
        <h3 className="text-2xl font-semibold mb-3">Mua Thẻ Tháng</h3>
        <div className="p-4 bg-white border rounded shadow">
          <p className="mb-2">200 xu : Tặng 500.000 KNB</p>
          <button
            onClick={() => alert('Bạn đã mua Thẻ Tháng!')}
            className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Mua Thẻ Tháng
          </button>
        </div>
      </div>

      {/* Hiển Thị Kết Quả */}
      {confirmedOption && (
        <div className="mt-6 p-4 bg-yellow-100 border border-yellow-300 rounded">
          <h4 className="text-2xl font-semibold">Bạn đã đổi thành công:</h4>
          <p>{confirmedOption}</p>
        </div>
      )}
    </div>
  );
};

export default DoiKNB;
