import React from 'react';
import './HomeProfileStyle.css';
import { Avatar } from "antd";
import {
  UserOutlined,

} from "@ant-design/icons";

export const HomeProfile = () => {
    return(
        <>
        <div className="profile-main">
            <div className="profile-inner">
                <Avatar size={60} icon={<UserOutlined />} />
                <h1>Welcome to Task Tracker</h1>
                <p>Create, View & Delete tasks made easy </p>
            </div>
        </div>
        </>
    )

}