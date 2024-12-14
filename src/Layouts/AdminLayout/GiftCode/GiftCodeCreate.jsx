import React, { useState } from "react";
import api from "../_Api/api";

const GiftcodeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    items: [{ itemId: "", quantity: "" }],
    title: "",
    content: "",
    usage: "",
    expiryDate: "",
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...formData.items];
    updatedItems[index][field] = value;
    setFormData({ ...formData, items: updatedItems });
  };

  const addItem = () => {
    setFormData((prevState) => ({
      ...prevState,
      items: [...prevState.items, { itemId: "", quantity: "" }],
    }));
  };

  const removeItem = (index) => {
    setFormData((prevState) => ({
      ...prevState,
      items: prevState.items.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedData = {
      name: formData.name,
      code: formData.code,
      title: formData.title,
      content: formData.content,
      usage: parseInt(formData.usage),
      items: formData.items.map((item) => ({
        itemId: item.itemId,
        quantity: parseInt(item.quantity),
      })),
      expiryDate: formData.expiryDate,
    };
    try {
      const response = await api.taoGiftcode(formattedData);
      console.log("Giftcode created successfully:", response);
      alert("Giftcode created successfully!");
    } catch (error) {
      console.error("Error creating giftcode:", error);
      alert("Failed to create giftcode");
    }
  };  

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded-md">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Code</label>
        <input
          type="text"
          value={formData.code}
          onChange={(e) => handleInputChange("code", e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Items</label>
        {Array.isArray(formData.items) && formData.items.length > 0 ? (
          formData.items.map((item, index) => (
            <div key={index} className="flex items-center gap-4 mt-2">
              <input
                type="number"
                placeholder="Item ID"
                value={item.itemId}
                onChange={(e) =>
                  handleItemChange(index, "itemId", e.target.value)
                }
                className="w-1/2 p-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="number"
                placeholder="Quantity"
                value={item.quantity}
                onChange={(e) =>
                  handleItemChange(index, "quantity", e.target.value)
                }
                className="w-1/2 p-2 border border-gray-300 rounded-md"
                required
              />
              <button
                type="button"
                onClick={() => removeItem(index)}
                className="p-2 bg-red-500 text-white rounded-md"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No items added yet.</p>
        )}

        <button
          type="button"
          onClick={addItem}
          className="mt-2 p-2 bg-blue-500 text-white rounded-md"
        >
          Add Item
        </button>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Content</label>
        <textarea
          value={formData.content}
          onChange={(e) => handleInputChange("content", e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Usage</label>
        <input
          type="number"
          value={formData.usage}
          onChange={(e) => handleInputChange("usage", e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Expiry Date</label>
        <input
          type="date"
          value={formData.expiryDate}
          onChange={(e) => handleInputChange("expiryDate", e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full p-2 bg-green-500 text-white rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default GiftcodeForm;
