import React, { useState, useEffect } from "react";
import api from "../_Api/api";

const AccountCRUD = () => {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState("");
  const [userDetails, setUserDetails] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    setLoading(true);
    try {
      const data = await api.getAllUsers();
      setUsers(data);
    } catch {
      setError("Failed to fetch users.");
    } finally {
      setLoading(false);
    }
  };

  const fetchUserById = async () => {
    if (!userId) return;
    setLoading(true);
    setError("");
    try {
      const data = await api.getUserById(userId);
      setUserDetails(data);
    } catch (err) {
      setError("User not found.");
      setUserDetails(null);
    } finally {
      setLoading(false);
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = async () => {
    try {
      const updatedFields = {
        email: editForm.email,
        password: editForm.password,
        gameId: editForm.gameId,
        Cash: editForm.Cash,
        CashFree: editForm.CashFree,
        MocNap: editForm.MocNap,
      };

      await api.updateUser(editingUser, updatedFields);

      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.userid === editingUser ? { ...user, ...updatedFields } : user
        )
      );
      setEditingUser(null);
    } catch {
      setError("Failed to update user.");
    }
  };

  const handleDeleteClick = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await api.deleteUser(userId);
        fetchAllUsers();
      } catch (err) {
        setError("Failed to delete user.");
      }
    }
  };

  const handleEditClick = (user) => {
    setEditingUser(user.userid);
    setEditForm({ ...user });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Danh Sách Tài Khoản</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Tất cả tài khoản</h2>
        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <table className="table-auto w-full bg-white rounded-lg shadow p-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">User ID</th>
                <th className="px-4 py-2">Username</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Password</th>
                <th className="px-4 py-2">Game ID</th>
                <th className="px-4 py-2">Cash</th>
                <th className="px-4 py-2">Cash Free</th>
                <th className="px-4 py-2">Mốc Nạp</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.userid} className="border-b">
                  <td className="px-4 py-2 text-center">{user.userid}</td>
                  <td className="px-4 py-2">{user.username}</td>
                  <td className="px-4 py-2">
                    {editingUser === user.userid ? (
                      <input
                        type="text"
                        name="email"
                        value={editForm.email || ""}
                        onChange={handleEditChange}
                        className="border border-gray-300 rounded px-2 py-1"
                      />
                    ) : (
                      user.email
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editingUser === user.userid ? (
                      <input
                        type="text"
                        name="password"
                        value={editForm.password || ""}
                        onChange={handleEditChange}
                        className="border border-gray-300 rounded px-2 py-1"
                      />
                    ) : (
                      user.password
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editingUser === user.userid ? (
                      <input
                        type="text"
                        name="gameId"
                        value={editForm.gameId || ""}
                        onChange={handleEditChange}
                        className="border border-gray-300 rounded px-2 py-1"
                      />
                    ) : (
                      user.gameId
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editingUser === user.userid ? (
                      <input
                        type="text"
                        name="Cash"
                        value={editForm.Cash || ""}
                        onChange={handleEditChange}
                        className="border border-gray-300 rounded px-2 py-1"
                      />
                    ) : (
                      user.Cash
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editingUser === user.userid ? (
                      <input
                        type="text"
                        name="CashFree"
                        value={editForm.CashFree || ""}
                        onChange={handleEditChange}
                        className="border border-gray-300 rounded px-2 py-1"
                      />
                    ) : (
                      user.CashFree
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editingUser === user.userid ? (
                      <input
                        type="text"
                        name="MocNap"
                        value={editForm.MocNap || ""}
                        onChange={handleEditChange}
                        className="border border-gray-300 rounded px-2 py-1"
                      />
                    ) : (
                      user.MocNap
                    )}
                  </td>
                  <td className="px-4 py-2 flex justify-center gap-2">
                    {editingUser === user.userid ? (
                      <button
                        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                        onClick={handleEditSubmit}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                        onClick={() => handleEditClick(user)}
                      >
                        Edit
                      </button>
                    )}
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDeleteClick(user.userid)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Get User By ID</h2>
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter User ID"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            onClick={fetchUserById}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Search
          </button>
        </div>
        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : userDetails ? (
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-gray-700">Name: {userDetails.username}</p>
            <p className="text-gray-700">Email: {userDetails.email}</p>
            <p className="text-gray-700">User ID: {userDetails.userid}</p>
            <p className="text-gray-700">Cash: {userDetails.Cash}</p>
            <p className="text-gray-700">Cash Free: {userDetails.CashFree}</p>
            <p className="text-gray-700">
              Game ID: {userDetails.gameId || "N/A"}
            </p>
            <p className="text-gray-700">Mốc Nạp: {userDetails.MocNap}</p>
          </div>
        ) : (
          <p className="text-gray-600">Enter a User ID to view details.</p>
        )}
      </div>
    </div>
  );
};

export default AccountCRUD;
