import React, { useState } from "react";
import { Form, Input, Button, DatePicker, Space, message } from "antd";
import api from "../_Api/api";

const GiftCodeCreate = () => {
  const [form] = Form.useForm();
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([...items, { itemId: "", quantity: "" }]);
  };
  const removeItem = (index) => {
    setItems(items.filter((_, idx) => idx !== index));
  };
  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };
  const onFinish = async (values) => {
    try {
      const { name, code, title, usage, content, expiryDate } = values;
      const payload = {
        name,
        code,
        title,
        usage: parseInt(usage, 10),
        content,
        expiryDate: expiryDate.toISOString(),
        items: Array.isArray(items)
          ? items.map((item) => ({
              itemId: parseInt(item.itemId, 10),
              quantity: parseInt(item.quantity, 10),
            }))
          : [],
      };
  
      await api.taoGiftcode(payload);
      message.success("Giftcode created successfully!");
      form.resetFields();
      setItems([]);
    } catch (error) {
      message.error(error.response?.data?.message || "Failed to create giftcode");
    }
  };  

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h2>Create GiftCode</h2>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please enter the name" }]}
        >
          <Input placeholder="Giftcode Name" />
        </Form.Item>

        <Form.Item
          name="code"
          label="Code"
          rules={[{ required: true, message: "Please enter the code" }]}
        >
          <Input placeholder="Giftcode Code" />
        </Form.Item>

        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please enter the title" }]}
        >
          <Input placeholder="Giftcode Title" />
        </Form.Item>

        <Form.Item
          name="content"
          label="Content"
          rules={[{ required: true, message: "Please enter the content" }]}
        >
          <Input.TextArea placeholder="Giftcode Content" rows={4} />
        </Form.Item>

        <Form.Item
          name="usage"
          label="Usage"
          rules={[{ required: true, message: "Please enter the usage count" }]}
        >
          <Input type="number" placeholder="Usage Count" />
        </Form.Item>

        <Form.Item
          name="expiryDate"
          label="Expiry Date"
          rules={[{ required: true, message: "Please select the expiry date" }]}
        >
          <DatePicker showTime style={{ width: "100%" }} />
        </Form.Item>

        <div>
          <h4>Items</h4>
          {items.map((item, index) => (
            <Space key={index} style={{ marginBottom: "10px" }}>
              <Input
                placeholder="Item ID"
                value={item.itemId}
                onChange={(e) =>
                  handleItemChange(index, "itemId", e.target.value)
                }
              />
              <Input
                placeholder="Quantity"
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  handleItemChange(index, "quantity", e.target.value)
                }
              />
              <Button type="danger" onClick={() => removeItem(index)}>
                Remove
              </Button>
            </Space>
          ))}
          <Button type="dashed" onClick={addItem} style={{ marginTop: "10px" }}>
            Add Item
          </Button>
        </div>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginTop: "20px" }}
          >
            Create Giftcode
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default GiftCodeCreate;
