import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Select, Input, Row, Col } from "antd";
import './CreateTaskStyle.css';

import { toast } from "react-toastify";

import { PlusOutlined } from "@ant-design/icons";

toast.configure();

interface ICreateTask {
  company: string;
  project: string;
  taskname: string;
  priority: string;
  taskdescription: string;
}

export const CreateTask = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [task, setTask] = useState<any>([]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const onFinish = (values: ICreateTask) => {
    let data = [];
    data.push(values);
    // let localData = JSON.parse(localStorage.getItem("task")) as ICreateTask;

    localStorage.setItem("task", JSON.stringify(values));
    setIsModalVisible(false);
    form.resetFields();
    toast("Task Created");
  };

  const { Option } = Select;
  const { Item } = Form;
  const { TextArea } = Input;

  return (
    <>
      <div className="icon-box">
        <PlusOutlined className="plus-icon" onClick={showModal} />
        <span>Create task</span>
      </div>

      <Modal
        title="Create Task"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Row gutter={16}>
            <Col span={12}>
              <Item
                label="Company"
                name="company"
                rules={[{ required: true, message: "Required!" }]}
              >
                <Select defaultValue="Select Company">
                  <Option value="company1">company 1</Option>
                  <Option value="company2">company 2</Option>
                  <Option value="company3">company 3</Option>
                </Select>
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label="Project"
                name="project"
                rules={[{ required: true, message: "Required!" }]}
              >
                <Select defaultValue="Select Project">
                  <Option value="project1">project 1</Option>
                  <Option value="project2">project 2</Option>
                  <Option value="project3">project 3</Option>
                </Select>
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label="Task Name"
                name="taskname"
                rules={[{ required: true, message: "Required!" }]}
              >
                <Input placeholder="default size" />
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label="Priority"
                name="priority"
                rules={[{ required: true, message: "Required!" }]}
              >
                <Select defaultValue="Select Priority">
                  <Option value="very high">very high</Option>
                  <Option value="high">high</Option>
                  <Option value="medium">medium</Option>
                  <Option value="low">low</Option>
                  <Option value="very low">very low</Option>
                </Select>
              </Item>
            </Col>
            <Col span={24}>
              <Item label="Task Description" name="taskdescription">
                <TextArea placeholder="Enter task description " rows={4} />
              </Item>
            </Col>
          </Row>
          <Row className="btn-container">
              <Button className="mar-rt-10" key="back" onClick={handleCancel}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Create
              </Button>
          </Row>
        </Form>
      </Modal>
    </>
  );
};
