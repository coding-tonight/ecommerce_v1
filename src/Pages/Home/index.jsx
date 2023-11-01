import AppLayout from "../../Layouts/AppLayout";
import Carousels from "../../Components/Carousel";
import Category from "../../Components/Category";
import Products from "../../Components/Products";
import RecommendedProduct from "../../Components/RecomenededProduct";
import Info from "../../Components/Info";
// import Banner from "../../Components/Banner";
import { FloatButton } from "antd";
import { CaretUpOutlined } from '@ant-design/icons';

const Home = () => {
  return (
    <>
      <AppLayout>
        <Carousels />
        <Category />
        {/*  float button for back to top  */}
        <FloatButton.BackTop  icon={<CaretUpOutlined /> } />
        <Products />
        <RecommendedProduct />
        {/* <Banner /> */}
        <Info />
      </AppLayout>
    </>
  );
};

export default Home;
