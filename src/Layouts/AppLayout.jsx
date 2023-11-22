import PropTypes from "prop-types";
import { useState } from "react";
import { Layout, theme, FloatButton } from "antd";
import { CaretUpOutlined , CommentOutlined , CustomerServiceOutlined} from "@ant-design/icons";
import Navbar from "../Components/Navbar";
import AppFooter from "../Components/Footer";
import Menus from "../Components/Menus";
import { headerStyle, contentStyle } from "../assets/js/style";

const { Header, Content, Footer } = Layout;

const AppLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  //  theme
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onChange = () => {
    setOpen(!open);
  };

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
            <FloatButton.BackTop icon={<CaretUpOutlined />} />

            <FloatButton.Group
              open={open}
              trigger="click"
              onClick={onChange}
              style={{ right: 24 , bottom: 120 }}
              icon={<CustomerServiceOutlined />}
            >
              <FloatButton />
              <FloatButton icon={<CommentOutlined />} />
            </FloatButton.Group>
          </Content>
        </Layout>
        <Footer
          style={{
            background: "#000",
            color: "white",
          }}
        >
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
