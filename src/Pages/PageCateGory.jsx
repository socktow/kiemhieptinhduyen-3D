import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PageCateGory = ({ banner, category }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (category) {
      const filterKey =
        category === 'menclother' ? "men's clothing" : "women's clothing";
      setFilteredProducts(products.filter((item) => item.category === filterKey));
    }
  }, [category, products]);

  const handleProductClick = (title) => {
    const formattedTitle = title.replace(/ /g, '-');  // Thay tất cả khoảng trắng bằng dấu gạch nối
    navigate(`/news/${category}/${formattedTitle}`); // Chuyển hướng đến trang chi tiết sản phẩm
  };
  
  return (
    <div className="p-4">
      {banner && (
        <div className="mb-6">
          <img
            src={banner}
            alt="Banner"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        </div>
      )}

      <div>
        <h2 className="text-2xl font-bold mb-4">
          {category === 'menclother' ? "Men's Clothing" : "Women's Clothing"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer"
              onClick={() => handleProductClick(product.title)} // Handle click event
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-40 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-2">${product.price}</p>
              <p className="text-sm text-gray-500">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageCateGory;
