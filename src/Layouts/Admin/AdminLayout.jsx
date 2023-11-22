import { useState } from "react";
import PropTypes from "prop-types";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  DashOutlined,
  LogoutOutlined
} from "@ant-design/icons";

import Sidebar from "@/Components/Admin/sidebar";
import { logout } from "@/config/axios/config";

import { Layout, Button, theme, Typography } from "antd";
const { Header, Sider, Content , Footer} = Layout;



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
            <Button
            type="text"
            icon={<LogoutOutlined />}
            onClick={logout}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              float: 'right'
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            // background: colorBgContainer,
          }}
        >
          {children}
        </Content>

        <Footer>
           footer section
        </Footer>
      </Layout>
    </Layout>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node,
};

export default AdminLayout;
