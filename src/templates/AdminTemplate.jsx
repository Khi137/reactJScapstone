import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { NavLink, Outlet } from "react-router-dom";
import { Layout, Menu, Button, theme } from "antd";
import { useEffect } from "react";
import { getLocalStorage } from "../utils/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const NotifyContext = React.createContext(null);
const { Header, Sider, Content } = Layout;
const renderNotify = (notify) => {
  return toast(notify);
};
const AdminTemplate = () => {
  useEffect(() => {
    const user = getLocalStorage("user");
    console.log(user);
    if (!user) {
      window.location.href = "http://localhost:3000";
    }
    if (user?.maLoaiNguoiDung !== "QuanTri") {
      window.location.href = "http://localhost:3000";
    }

  }, []);

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Quản lí người dùng, quản lí phim, quản lí lịch chiếu

  return (
    <NotifyContext.Provider
      // value={{
      //   renderNotify,
      //   handleCloseTime,
      // }}
      value={renderNotify}
    >
      <Layout className="min-h-screen">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <VideoCameraOutlined />,
                label: <NavLink to="/admin/movie-manager">Quản lí phim</NavLink>,
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: <NavLink to="/admin/add-movie">Tạo phim</NavLink>,
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout></NotifyContext.Provider>
  );
};

export default AdminTemplate;
