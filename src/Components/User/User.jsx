import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ChangePassword from './tinhang/ChangePassword';
import ChangeEmail from './tinhang/ChangeEmail';
import Giftcode from './tinhang/Giftcode';
import InfoUser from './tinhang/InfoUser';
import MocNap from './tinhang/MocNap';
import DoiKNB from './tinhang/DoiKNB';

const User = () => {
  const { userInfo } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(() => {
    const savedOption = localStorage.getItem('selectedUserOption');
    if (savedOption) {
      localStorage.removeItem('selectedUserOption');
      return savedOption;
    }
    return "Thông Tin Tổng Thể";
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (!userInfo) {
      navigate('/home/login');
    }
  }, [userInfo, navigate]);

  const handleOptionClick = (option, e) => {
    if (e) {
      e.stopPropagation();
    }
    setSelectedOption(option);
    if (!["Thông Tin Tổng Thể", "Thay Đổi Password", "Thay Đổi Email"].includes(option)) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-gray-800 text-white p-5">
        <h2 className="text-4xl font-bold mb-5">Trang User</h2>
        <ul>
          <li
            className={`text-2xl cursor-pointer p-2 mb-2 hover:bg-gray-700 rounded ${selectedOption === "Thông Tin Tổng Thể" ? 'bg-gray-600' : ''}`}
            onClick={() => {
              setSelectedOption("Thông Tin Tổng Thể");
              setIsDropdownOpen(!isDropdownOpen);
            }}
          >
            Thông Tin Tổng Thể
            {isDropdownOpen && (
              <ul className="ml-4 mt-2">
                <li
                  className={`text-2xl cursor-pointer p-2 hover:bg-gray-700 rounded ${selectedOption === "Thay Đổi Password" ? 'bg-gray-600' : ''}`}
                  onClick={(e) => handleOptionClick("Thay Đổi Password", e)}
                >
                  Thay Đổi Password
                </li>
                <li
                  className={`text-2xl cursor-pointer p-2 hover:bg-gray-700 rounded ${selectedOption === "Thay Đổi Email" ? 'bg-gray-600' : ''}`}
                  onClick={(e) => handleOptionClick("Thay Đổi Email", e)}
                >
                  Thay Đổi Email
                </li>
              </ul>
            )}
          </li>
          <li
            className={`text-2xl cursor-pointer p-2 mb-2 hover:bg-gray-700 rounded ${selectedOption === "GiftCode" ? 'bg-gray-600' : ''}`}
            onClick={() => handleOptionClick("GiftCode")}
          >
            GiftCode
          </li>
          <li
            className={`text-2xl cursor-pointer p-2 mb-2 hover:bg-gray-700 rounded ${selectedOption === "Đổi KNB" ? 'bg-gray-600' : ''}`}
            onClick={() => handleOptionClick("Đổi KNB")}
          >
            Đổi KNB
          </li>
          <li
            className={`text-2xl cursor-pointer p-2 mb-2 hover:bg-gray-700 rounded ${selectedOption === "Mốc Nạp" ? 'bg-gray-600' : ''}`}
            onClick={() => handleOptionClick("Mốc Nạp")}
          >
            Mốc Nạp
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="w-full lg:w-3/4 p-10">
        <div className="bg-white p-5 rounded shadow-md">
          {selectedOption === "Thông Tin Tổng Thể" && <InfoUser />}
          {selectedOption === "Thay Đổi Password" && <ChangePassword />}
          {selectedOption === "Thay Đổi Email" && <ChangeEmail />}
          {selectedOption === "Mốc Nạp" && <MocNap />}
          {selectedOption === "Đổi KNB" && <DoiKNB />}
          {selectedOption === "GiftCode" && <Giftcode />}
        </div>
      </div>
    </div>
  );
};

export default User;
