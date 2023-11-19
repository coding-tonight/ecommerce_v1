import { useState } from "react";
import PropTypes from "prop-types";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  DashOutlined,
} from "@ant-design/icons";

import Sidebar from "@/Components/Admin/sidebar";

import { Layout, Button, theme, Typography } from "antd";
const { Header, Sider, Content } = Layout;

const AdminLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          height: "100vh",
        }}
      >
        <Typography.Title
          style={{
            color: "#fff",
            textAlign: 'center',
            fontSize: '2rem',
            marginTop: '3px'
          }}
        >
          CMS
        </Typography.Title>
       <Sidebar />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
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
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node,
};

export default AdminLayout;
