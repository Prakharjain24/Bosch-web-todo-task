import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Avatar } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import "./loginFormStyle.css";

toast.configure();

interface loginUser {
  username: string;
  password: string;
}

export const LoginForm = () => {
  const history = useHistory();
  const [form] = Form.useForm();

  const onFinish = async (values: loginUser) => {
    let res = await axios.get("https://reqres.in/api/users/2");
    let userInfo = res.data;
    if (
      userInfo.data.first_name === values.username &&
      userInfo.data.last_name === values.password
    ) {
      history.push({
        pathname: "/home",
      });
      toast("Login Successfully");
      console.log("successfully register ... !!");
    } else {
      toast("User Not found");
      console.log("Login failed ... !!");
    }
    form.resetFields();
  };

  return (
    <div className="login-container">
    <div className="login-wrapper">
      <div className="login-head">
      <Avatar className="login-avatar" size={40} icon={<UserOutlined />} />
      </div>
      <div className="login-body">
      
      <Form
        form={form}
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
      </div>
    </div>
    </div>
  );
};
