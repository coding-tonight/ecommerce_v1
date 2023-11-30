// import PropTypes from 'prop-types'
import AppLayout from "@/Layouts/AppLayout";
import { Layout, theme } from "antd";

import ProductPageHeader from "./Components/Header";
import ProductFilter from "./Components/Filter";
import BreadCrumbs from "@/Components/Admin/Breadcrumbs";

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
         {/*  breadcumbs */}
        <div className="container mx-auto my-3 w-11/12">
          <BreadCrumbs
            items={[{ title: "Home" }, { title: "All Product" }]}
            className="container mx-auto"
          />
        </div>

        <Layout
          style={{
            backgroundColor: colorBgContainer,
            width: "90%",
            margin: "20px auto 0  auto",
          }}
        >
          <Sider
            style={{
              backgroundColor: colorBgContainer,
              height: "100vh",
              width: '600px'
            }}
          >
           <ProductFilter />  
          </Sider>

          <Layout>
            <Header
              style={{
                backgroundColor: colorBgContainer,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end'
              }}
            >
              <ProductPageHeader />
            </Header>
            <Content>
              <section className="content"></section>
            </Content>
          </Layout>
        </Layout>
      </AppLayout>
    </>
  );
};

export default Products;
