import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Thay bằng URL API của bạn
});

export default axiosInstance;
