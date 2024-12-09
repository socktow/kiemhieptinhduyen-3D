import React, { useState } from "react";

const GiftCodeCreate = () => {
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    title: "",
    content: "",
    expiryDate: "",
    items: [{ itemId: "", quantity: "" }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const updatedItems = [...formData.items];
    updatedItems[index][name] = value;
    setFormData((prev) => ({ ...prev, items: updatedItems }));
  };

  const addItem = () => {
    setFormData((prev) => ({
      ...prev,
      items: [...prev.items, { itemId: "", quantity: "" }],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("GiftCode đã được tạo!");
    // Logic để gửi dữ liệu đến API sẽ được thêm sau
  };

  return (
    <div className="min-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-auto bg-white p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Tạo GiftCode</h2>
        <form onSubmit={handleSubmit}>
          {/* Tên GiftCode */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Tên GiftCode
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nhập tên GiftCode"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Mã Code */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Mã Code
            </label>
            <input
              type="text"
              name="code"
              value={formData.code}
              onChange={handleChange}
              placeholder="Nhập mã code"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Tiêu Đề
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Nhập tiêu đề"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Content */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Nội Dung
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Nhập nội dung"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>

          {/* Ngày hết hạn */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Ngày Hết Hạn
            </label>
            <input
              type="date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Danh sách Items */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Danh Sách Items
            </label>
            {formData.items.map((item, index) => (
              <div key={index} className="flex space-x-4 mt-2">
                <input
                  type="number"
                  name="itemId"
                  value={item.itemId}
                  onChange={(e) => handleItemChange(index, e)}
                  placeholder="ID Item"
                  className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  name="quantity"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, e)}
                  placeholder="Số lượng"
                  className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addItem}
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Thêm Item
            </button>
          </div>

          {/* Nút Tạo */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Tạo GiftCode
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GiftCodeCreate;
