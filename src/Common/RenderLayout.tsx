import React, { useState } from "react";
import { Layout, Menu,Avatar } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,

  HomeOutlined,
  FileDoneOutlined,
  ScheduleOutlined,
  CheckOutlined,

} from "@ant-design/icons";
import { CreateTask } from "./CreateTask";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { RenderTable } from "./RenderTable";
import './RenderLayoutStyle.css';
import { HomeProfile } from "./HomeProfile";

const { Header, Sider, Content } = Layout;

export const RenderLayout = () => {
  const history = useHistory();

  const [state, setState] = useState({
    collapsed: false,
  });

  const toggle = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={state.collapsed}>
        <div className="logo">Task Tracker</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item key="2"  icon={<FileDoneOutlined />}>
            <Link to="/todo">To do</Link>
          </Menu.Item>
          <Menu.Item key="3"  icon={<ScheduleOutlined />}>In Progress</Menu.Item>
          <Menu.Item key="4"  icon={<CheckOutlined />}>Done</Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div>
          {React.createElement(
            state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
          </div>
          <div className="user-profile">
            <span>Albert K</span>
            <Avatar className="login-avatar" size={30} style={{ backgroundColor: '#ddd', }} icon={<UserOutlined />} />
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <CreateTask />
          <HomeProfile />
          {/* <RenderTable /> */}
        </Content>
      </Layout>
    </Layout>
  );
};
