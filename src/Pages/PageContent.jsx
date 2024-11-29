import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PageContent = () => {
  const { category, title } = useParams();  // Lấy category và title từ URL
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        const decodedTitle = title.replace(/-/g, ' ');  // Thay tất cả dấu gạch nối thành khoảng trắng
        
        // Tìm sản phẩm có title khớp
        const productData = data.find(p => p.title === decodedTitle);

        if (productData) {
          setProduct(productData);  // Nếu tìm thấy sản phẩm, set dữ liệu vào state
        } else {
          navigate('/404');  // Nếu không tìm thấy sản phẩm, chuyển đến trang lỗi
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();  // Gọi hàm fetch khi component mount

  }, [title, navigate]);  // Chạy lại khi title thay đổi

  if (!product) return <div>Loading...</div>;  // Hiển thị loading khi chưa có dữ liệu

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
      />
      <p className="text-lg font-semibold mb-2">${product.price}</p>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-sm text-gray-500">Category: {product.category}</p>
    </div>
  );
};

export default PageContent;
