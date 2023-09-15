import PropTypes from "prop-types";
import { Layout, theme } from "antd";
import Navbar from "../Components/Navbar";
import AppFooter from '../Components/Footer';
import Menus from "../Components/Menus";
import { headerStyle, contentStyle } from "../assets/js/style";

const { Header, Content, Footer } = Layout;

const AppLayout = ({ children }) => {
  //  theme
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // console.log(import.meta.env)
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
        <Layout>
          <Content
            style={{
              ...contentStyle,
            }}
          >
            {children}
          </Content>
        </Layout>
        <Footer style={{
          background: "#000",
          marginTop: '10px',
          color: 'white'
        }}>
          <AppFooter />
        </Footer>
      </Layout>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;
