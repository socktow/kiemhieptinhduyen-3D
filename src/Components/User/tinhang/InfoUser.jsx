import React from "react";
import { useSelector } from "react-redux";

const InfoUser = ({ user }) => {
  const { userInfo } = useSelector((state) => state.user);
  return (
    <div className="bg-white p-5 rounded shadow-md">
      <h3 className="text-xl font-bold mb-4">Thông Tin Người Dùng</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="font-semibold">Tên Tài Khoản:</span>
          <span>{userInfo?.username || "N/A"}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Email:</span>
          <span>{userInfo?.email || "N/A"}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Xu:</span>
          <span>{userInfo?.Cash || 0}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Xu Khóa:</span>
          <span>{userInfo?.CashFree || 0}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Nốc Nạp:</span>
          <span>{userInfo?.MocNap || 0}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">IP Login:</span>
          <span>{user?.ipLogin || "N/A"}</span>
        </div>
      </div>
    </div>
  );
};

export default InfoUser;
