import React, { useState, useEffect } from "react";
import api from "../_Api/api";
import { notification, Table, Tag } from "antd";

const PostList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch articles from the backend
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await api.getArticles();
        setArticles(data);
      } catch (error) {
        notification.error({ message: "Failed to fetch articles!" });
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  // Table columns definition
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (url) => <img src={url} alt="Thumbnail" style={{ width: "80px" }} />,
    },
    {
      title: "Content Type",
      dataIndex: "contentType",
      key: "contentType",
      render: (type) => (
        <Tag color={type === "su-kien" ? "blue" : "green"}>{type.toUpperCase()}</Tag>
      ),
      sorter: (a, b) => a.contentType.localeCompare(b.contentType),
    },
    {
      title: "Redirect",
      dataIndex: "redirect",
      key: "redirect",
      render: (redirect) => (redirect ? "Yes" : "No"),
      sorter: (a, b) => Number(a.redirect) - Number(b.redirect),
    },
    {
      title: "Redirect Link",
      dataIndex: "redirectLink",
      key: "redirectLink",
      render: (link) =>
        link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            Visit
          </a>
        ) : (
          "-"
        ),
    },
    {
      title: "Published Date",
      dataIndex: "publishDate",
      key: "publishDate",
      render: (date) => new Date(date).toLocaleString(),
    },
  ];

  return (
    <div className="container mx-auto p-4 min-h-svh">
      <h2 className="text-2xl font-bold mb-4">Danh Sách Bài Viết</h2>
      <Table
        dataSource={articles}
        columns={columns}
        rowKey={(record) => record._id}
        loading={loading}
        pagination={{ pageSize: 7 }}
      />
    </div>
  );
};

export default PostList;
