import React, { useState } from "react";

const items = [
  {
    id: 1,
    category: "Trang Bị",
    name: "Kiếm Huyền Thoại",
    image: "https://via.placeholder.com/150",
    price: "500,000 VNĐ",
  },
  {
    id: 2,
    category: "Thời Trang",
    name: "Áo Giáp Bóng Đêm",
    image: "https://via.placeholder.com/150",
    price: "300,000 VNĐ",
  },
  {
    id: 3,
    category: "Đạo Cụ",
    name: "Bùa Hộ Mệnh",
    image: "https://via.placeholder.com/150",
    price: "200,000 VNĐ",
  },
  // Add more items here
];

const CuaHang = () => {
  const [currentCategory, setCurrentCategory] = useState("Tất Cả");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = ["Tất Cả", "Trang Bị", "Thời Trang", "Đạo Cụ"];

  const filteredItems =
    currentCategory === "Tất Cả"
      ? items
      : items.filter((item) => item.category === currentCategory);

  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Danh Mục */}
      <div className="flex justify-center space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg font-bold ${
              currentCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => {
              setCurrentCategory(category);
              setCurrentPage(1); // Reset to page 1 when switching categories
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Sản Phẩm */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {paginatedItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-32 w-32 object-cover mb-4"
            />
            <h2 className="text-lg font-bold text-center">{item.name}</h2>
            <p className="text-red-500 font-bold text-lg my-2">{item.price}</p>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center">
                <span className="material-icons-outlined">add_shopping_cart</span> Thêm Giỏ Hàng
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                Mua
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Chuyển Trang */}
      {totalPages > 1 && (
        <div className="flex justify-center space-x-2 mt-6">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === page
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default CuaHang;
