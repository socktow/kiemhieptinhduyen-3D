import React, { useEffect, useState } from "react";
import { Table, Tag } from "antd";
import api from "../_Api/api"; 

const GiftCodeList = () => {
  const [giftCodes, setGiftCodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGiftCodes = async () => {
      try {
        const data = await api.getGiftcodes();
        setGiftCodes(data);
      } catch (error) {
        console.error("Error fetching gift codes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGiftCodes();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "Items",
      dataIndex: "items",
      key: "items",
      render: (items) => (
        <div>
          {items.map((item) => (
            <div key={item._id}>{`${item.itemId}: ${item.quantity}`}</div>
          ))}
        </div>
      ),
    },
    {
      title: "Usage",
      dataIndex: "usage",
      key: "usage",
      render: (usage) => <Tag color="blue">{usage}</Tag>,
    },
    {
      title: "Expiry Date",
      dataIndex: "expiryDate",
      key: "expiryDate",
      render: (expiryDate) => new Date(expiryDate).toLocaleString(),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Gift Code List</h2>
      <Table
        columns={columns}
        dataSource={giftCodes.map((giftCode) => ({
          ...giftCode,
          key: giftCode._id,
        }))}
        loading={loading}
        bordered
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default GiftCodeList;