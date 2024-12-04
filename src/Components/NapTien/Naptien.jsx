import React, { useState } from 'react';

const Naptien = () => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('MoMo');
  const [isCardDisabled, setIsCardDisabled] = useState(true); // Thẻ Cào vô hiệu hóa

  // Kiểm tra xem số tiền có chia hết cho 50000 hay không
  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
  };

  // Xử lý việc chọn phương thức thanh toán
  const handlePaymentMethodChange = (e) => {
    const value = e.target.value;
    setPaymentMethod(value);
    if (value === 'Nạp Thẻ Cào') {
      setIsCardDisabled(true); // Thẻ cào sẽ bị vô hiệu hóa
    } else {
      setIsCardDisabled(false); // Các phương thức khác thì không bị vô hiệu hóa
    }
  };

  // Tính số tiền cần nạp
  const requiredAmount = paymentMethod === 'Nạp Thẻ Cào' ? 'Tính Năng Không Khả Dụng' : amount/100;

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Trang Nạp Tiền</h2>
      <div className="space-y-4">
        {/* Nhập Số Tiền */}
        <div>
          <label className="block text-lg font-semibold mb-2">Nhập Số Tiền</label>
          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Nhập số tiền (VND)"
            value={amount}
            onChange={handleAmountChange}
          />
          {amount && amount % 50000 !== 0 && (
            <p className="text-red-500 text-sm mt-2">Số tiền phải chia hết cho 50,000 VND</p>
          )}
        </div>

        {/* Chọn Phương Thức Nạp Tiền */}
        <div>
          <label className="block text-lg font-semibold mb-2">Chọn Phương Thức Nạp Tiền</label>
          <select
            className="w-full p-3 border border-gray-300 rounded-md"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
          >
            <option value="MoMo">MoMo</option>
            <option value="ZaloPay">ZaloPay</option>
            <option value="Ngân Hàng">Ngân Hàng</option>
            <option value="Nạp Thẻ Cào" disabled={isCardDisabled}>Nạp Thẻ Cào</option>
          </select>
        </div>

        {/* Hiển Thị Số Tiền Cần Nạp */}
        <div>
          <label className="block text-lg font-semibold mb-2">Số Xu Nhận Được</label>
          <input
            type="text"
            className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md"
            value={requiredAmount}
            readOnly
          />
        </div>

        {/* Nút Tiến Hành Thanh Toán */}
        <div className="mt-6">
          <button
            className={`w-full p-3 rounded-md text-white font-semibold ${amount && amount % 50000 === 0 ? 'bg-blue-500' : 'bg-gray-400 cursor-not-allowed'}`}
            disabled={amount && amount % 50000 !== 0}
          >
            Tiến Hành Thanh Toán
          </button>
        </div>
      </div>
    </div>
  );
};

export default Naptien;
