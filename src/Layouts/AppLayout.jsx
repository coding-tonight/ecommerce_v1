// import { useEffect } from "react";
import PropTypes from "prop-types";
import { Layout, theme } from "antd";
import Navbar from "../Components/Navbar";

const { Header, Content, Footer } = Layout;

const AppLayout = ({ children }) => {
  //  theme
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Layout>
        <Header
          style={{
            background: colorBgContainer,
            paddingInline: 50,
            lineHeight: "64px",
            height: "80px",
          }}
        >
          <Navbar />
        </Header>
        <Layout>
          <Content>{children}</Content>
        </Layout>
        <Footer>this is footer</Footer>
      </Layout>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;
