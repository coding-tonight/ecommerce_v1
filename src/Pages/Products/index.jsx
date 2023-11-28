// import PropTypes from 'prop-types'
import AppLayout from "@/Layouts/AppLayout";
import { Layout, theme } from "antd";

const { Header, Sider, Content } = Layout;

/**
 *  products page.
 * @returns  {JSX.Element}
 * |
 */

const Products = () => {
  //  theme
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <AppLayout>
        <Layout
          style={{
            backgroundColor: colorBgContainer,
            marginTop: '20px'
          }}
        >
          <Sider
            style={{
              backgroundColor: colorBgContainer,
            }}
          >
            filter
          </Sider>

          <Layout>
            <Header
              style={{
                backgroundColor: colorBgContainer,
              }}
            >
              this is header filter
            </Header>
            <Content>this is content section</Content>
          </Layout>
        </Layout>
      </AppLayout>
    </>
  );
};

export default Products;
