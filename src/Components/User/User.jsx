import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChangePassword from './tinhang/ChangePassword';
import ChangeEmail from './tinhang/ChangeEmail';
import NapTien from './tinhang/NapTien';
import Giftcode from './tinhang/Giftcode';
import InfoUser from './tinhang/InfoUser';
import MocNap from './tinhang/MocNap';
import Api from '../../Api/api'

const User = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("Thông Tin Tổng Thể");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await Api.getUserInfo();
        if (!response) {
          navigate('/home/login');
        }
      } catch (error) {
        if (error.response?.status === 401) {
          localStorage.removeItem('token');
          navigate('/home/login');
        }
      }
    };

    checkAuth();
  }, [navigate]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 mt-28 md:mt-30">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-gray-800 text-white p-5">
        <h2 className="text-xl font-bold mb-5">Trang User</h2>
        <ul>
          <li
            className={`cursor-pointer p-2 mb-2 hover:bg-gray-700 rounded ${selectedOption === "Thông Tin Tổng Thể" ? 'bg-gray-600' : ''}`}
            onClick={() => setSelectedOption("Thông Tin Tổng Thể")}
          >
            Thông Tin Tổng Thể
          </li>
          <li
            className={`cursor-pointer p-2 mb-2 hover:bg-gray-700 rounded ${selectedOption === "Thay Đổi Password" ? 'bg-gray-600' : ''}`}
            onClick={() => setSelectedOption("Thay Đổi Password")}
          >
            Thay Đổi Password
          </li>
          <li
            className={`cursor-pointer p-2 mb-2 hover:bg-gray-700 rounded ${selectedOption === "Thay Đổi Email" ? 'bg-gray-600' : ''}`}
            onClick={() => setSelectedOption("Thay Đổi Email")}
          >
            Thay Đổi Email
          </li>
          <li
            className={`cursor-pointer p-2 mb-2 hover:bg-gray-700 rounded ${selectedOption === "Nạp Tiền" ? 'bg-gray-600' : ''}`}
            onClick={() => setSelectedOption("Nạp Tiền")}
          >
            Nạp Tiền
          </li>
          <li
            className={`cursor-pointer p-2 mb-2 hover:bg-gray-700 rounded ${selectedOption === "GiftCode Đã Sử Dụng" ? 'bg-gray-600' : ''}`}
            onClick={() => setSelectedOption("GiftCode Đã Sử Dụng")}
          >
            GiftCode Đã Sử Dụng
          </li>
          <li
            className={`cursor-pointer p-2 mb-2 hover:bg-gray-700 rounded ${selectedOption === "Mốc Nạp" ? 'bg-gray-600' : ''}`}
            onClick={() => setSelectedOption("Mốc Nạp")}
          >
            Mốc Nạp
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="w-full lg:w-3/4 p-10">
        <div className="bg-white p-5 rounded shadow-md">
          {selectedOption === "Thông Tin Tổng Thể" && (
            <InfoUser />
          )}
          {selectedOption === "Thay Đổi Password" && (
            <ChangePassword />
          )}
          {selectedOption === "Thay Đổi Email" && (
            <ChangeEmail />
          )}
          {selectedOption === "Nạp Tiền" && (
            <NapTien />
          )}
          {selectedOption === "GiftCode Đã Sử Dụng" && (
            <Giftcode />
          )}
          {selectedOption === "Mốc Nạp" && (
            <MocNap />
          )}
        </div>
      </div>
    </div>
  );
}

export default User;
