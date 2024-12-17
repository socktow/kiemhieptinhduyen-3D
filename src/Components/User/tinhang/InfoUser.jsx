import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Modal, Input, message } from "antd";
import api from "../../../Api/api";

const InfoUser = ({ user }) => {
  const { userInfo } = useSelector((state) => state.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gameId, setGameId] = useState("");
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [gameData, setGameData] = useState(null); // Store game data

  const handleLinkCharacter = async () => {
    if (!gameId.trim()) {
      message.error("Vui lòng nhập GameID");
      return;
    }

    setLoading(true);
    try {
      const response = await api.getGameId(gameId);
      if (response) {
        setGameData(response);
        message.success("Thông tin GameID đã được tìm thấy");
      } else {
        message.error("Không tìm thấy nhân vật với GameID này.");
      }
    } catch (error) {
      message.error(error.response?.data?.message || "Không thể truy cập thông tin GameID");
    } finally {
      setLoading(false);
    }
  };

  const handleConfirm = async () => {
    if (!gameData) {
      message.error("Vui lòng xác nhận thông tin trước khi liên kết.");
      return;
    }

    setLoading(true);
    try {
      const response = await api.linkGameId(gameId);
      if (response.message === "GameID updated successfully") {
        message.success(
          isEditing
            ? "Cập nhật GameID thành công"
            : "Liên kết nhân vật thành công"
        );
        setIsModalOpen(false);
        window.location.reload();
      }
    } catch (error) {
      message.error(error.response?.data?.message || "Lỗi khi liên kết GameID");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      setGameId("");
      setGameData(null);
      setIsEditing(false);
    }
  }, [isModalOpen]);

  return (
    <div className="bg-white p-5 rounded shadow-md">
      <h3 className="text-xl font-bold mb-4">Thông Tin Người Dùng</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="font-semibold">Tên Tài Khoản:</span>
          <span>{userInfo?.username || "N/A"}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">GameID:</span>
          {userInfo?.gameId ? (
            <div className="flex items-center space-x-4">
              <span>{userInfo.gameId}</span>
              <button
                onClick={() => {
                  setIsEditing(true);
                  setGameId(userInfo.gameId);
                  setIsModalOpen(true);
                }}
                className="px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600
                  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50
                  transition-colors duration-200"
              >
                Đổi ID
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setIsEditing(false);
                setGameId("");
                setGameData(null);
                setIsModalOpen(true);
              }}
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
        title={isEditing ? "Đổi GameID" : "Liên Kết Nhân Vật"}
        open={isModalOpen}
        onOk={handleConfirm}
        onCancel={() => setIsModalOpen(false)}
        confirmLoading={loading}
        okText={gameData ? "Xác Nhận" : "Liên Kết Account"} // Dynamic button text
        cancelText="Hủy"
      >
        <div className="space-y-4">
          <p className="text-gray-600">Vui lòng nhập GameID của nhân vật:</p>
          <Input
            placeholder="Nhập GameID"
            value={gameId}
            onChange={(e) => setGameId(e.target.value)}
            className="w-full"
            onBlur={handleLinkCharacter}
          />

          {gameData && (
            <div className="mt-4 text-gray-700">
              <p>Nhân Vật: {gameData.NAME}</p>
              <p>GameID: {gameData.ID}</p>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default InfoUser;
