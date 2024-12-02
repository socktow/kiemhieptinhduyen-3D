import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal, Input, message } from "antd";
import api from "../../../Api/api";

const InfoUser = ({ user }) => {
  const { userInfo } = useSelector((state) => state.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gameId, setGameId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLinkCharacter = async () => {
    if (!gameId.trim()) {
      message.error("Vui lòng nhập GameID");
      return;
    }

    setLoading(true);
    try {
      const response = await api.linkGameId(gameId);
      if (response.success) {
        message.success("Liên kết nhân vật thành công");
        setIsModalOpen(false);
        // Cập nhật lại thông tin user sau khi liên kết
        window.location.reload(); // Hoặc dispatch action để cập nhật userInfo
      }
    } catch (error) {
      message.error(error.response?.data?.message || "Có lỗi xảy ra khi liên kết nhân vật");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-5 rounded shadow-md">
      <h3 className="text-xl font-bold mb-4">Thông Tin Người Dùng</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="font-semibold">Tên Tài Khoản:</span>
          <span>{userInfo?.username || "N/A"}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Nhân Vật:</span>
          {userInfo?.GameId ? (
            <span>{userInfo.GameId}</span>
          ) : (
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 
                transition-colors duration-200"
            >
              Liên Kết Nhân Vật
            </button>
          )}
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

      <Modal
        title="Liên Kết Nhân Vật"
        open={isModalOpen}
        onOk={handleLinkCharacter}
        onCancel={() => setIsModalOpen(false)}
        confirmLoading={loading}
        okText="Xác Nhận"
        cancelText="Hủy"
      >
        <div className="space-y-4">
          <p className="text-gray-600">Vui lòng nhập GameID của nhân vật:</p>
          <Input
            placeholder="Nhập GameID"
            value={gameId}
            onChange={(e) => setGameId(e.target.value)}
            className="w-full"
          />
        </div>
      </Modal>
    </div>
  );
};

export default InfoUser;
