import React from "react";

const NapTien = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">Nạp Tiền</h2>
      <form className="space-y-4">
        {/* Số tiền */}
        <div>
          <label className="block text-gray-600 font-medium mb-2" htmlFor="amount">
            Số tiền muốn nạp (VNĐ)
          </label>
          <input
            type="number"
            id="amount"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Nhập số tiền"
          />
        </div>

        {/* Phương thức thanh toán */}
        <div>
          <label className="block text-gray-600 font-medium mb-2" htmlFor="paymentMethod">
            Phương thức thanh toán
          </label>
          <select
            id="paymentMethod"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="bank">Ngân hàng</option>
            <option value="momo">Momo</option>
            <option value="zalo">Zalo Pay</option>
          </select>
        </div>

        {/* Nút nạp */}
        <div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Nạp Tiền
          </button>
        </div>
      </form>
    </div>
  );
};

export default NapTien;
