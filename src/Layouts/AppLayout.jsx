import PropTypes from "prop-types";
import { Layout, theme } from "antd";
import Navbar from "../Components/Navbar";
import Menus from "../Components/Menus";
import { headerStyle } from "../assets/js/style";

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
            ...headerStyle,
          }}
        >
          <Navbar />
        </Header>
        <Header
          style={{
            background: "white",
            height: "10px",
            ...headerStyle,
          }}
        >
          <Menus />
        </Header>
        <Layout
          style={{
            marginTop: "50px",
          }}
        >
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
