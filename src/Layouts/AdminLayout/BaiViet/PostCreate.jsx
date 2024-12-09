import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import api from "../_Api/api";
import { notification, Spin } from "antd";

const PostCreate = () => {
  const [formData, setFormData] = useState({
    title: "",
    thumbnail: "",
    contentType: "tin-tuc",
    content: "",
    redirect: false,
    redirectLink: "",
  });
  const [image, setImage] = useState(null);
  const [editorContent, setEditorContent] = useState("");
  const [useHtml, setUseHtml] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageUpload = async () => {
    if (!image) {
      notification.error({ message: "Vui lòng chọn ảnh để upload!" });
      return null;
    }
    try {
      setLoading(true); // Start loading
      const response = await api.uploadImage(image);
      setLoading(false); // End loading
      if (response.success) {
        return response.image_url;
      } else {
        throw new Error(response.message || "Lỗi upload ảnh");
      }
    } catch (error) {
      setLoading(false);
      notification.error({ message: error.message });
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const uploadedImageUrl = await handleImageUpload();
      if (!uploadedImageUrl) {
        setLoading(false);
        return;
      }

      const articleData = {
        ...formData,
        thumbnail: uploadedImageUrl,
        content: useHtml ? editorContent : formData.content,
      };

      await api.createArticle(articleData);
      setLoading(false); // End loading
      notification.success({ message: "Tạo bài viết thành công!" });
    } catch (error) {
      setLoading(false); // End loading
      notification.error({ message: "Lỗi khi tạo bài viết!" });
    }
  };

  return (
    <div className="mx-auto p-6 bg-white shadow-md rounded min-h-svh">
      <Spin spinning={loading}>
        <h2 className="text-2xl font-bold mb-4">Tạo bài viết</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Tiêu đề:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Ảnh (thumbnail):</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full px-4 py-2 border rounded focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Loại nội dung:</label>
            <select
              name="contentType"
              value={formData.contentType}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded focus:outline-none"
            >
              <option value="tin-tuc">Tin tức</option>
              <option value="su-kien">Sự kiện</option>
              <option value="tinh-nang">Tính năng</option>
              <option value="huong-dan">Hướng dẫn</option>
            </select>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-gray-700 font-medium">Nội dung:</label>
              <button
                type="button"
                onClick={() => setUseHtml(!useHtml)}
                className="px-4 py-1 text-sm bg-blue-500 text-white rounded focus:outline-none"
              >
                {useHtml ? "Sử dụng Text" : "Sử dụng HTML"}
              </button>
            </div>
            {useHtml ? (
              <ReactQuill
                theme="snow"
                value={editorContent}
                onChange={setEditorContent}
                className="mt-2"
                modules={{
                  toolbar: [
                    [{ header: [1, 2, 3, false] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["link", "image"],
                    ["clean"],
                  ],
                }}
              />
            ) : (
              <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded focus:outline-none"
                rows="5"
                required
              />
            )}
          </div>
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="redirect"
                checked={formData.redirect}
                onChange={handleInputChange}
              />
              <span className="text-gray-700 font-medium">Redirect</span>
            </label>
          </div>
          {formData.redirect && (
            <div>
              <label className="block text-gray-700 font-medium">Redirect Link:</label>
              <input
                type="url"
                name="redirectLink"
                value={formData.redirectLink}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded focus:outline-none"
              />
            </div>
          )}
          <button
            type="submit"
            className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
          >
            Tạo bài viết
          </button>
        </form>
      </Spin>
    </div>
  );
};

export default PostCreate;
