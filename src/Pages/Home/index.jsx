import AppLayout from "../../Layouts/AppLayout";
import Carousels from "../../Components/Carousel";
import Category from "../../Components/Category";
import Products from "../../Components/Products";
import RecommendedProduct from "../../Components/RecomenededProduct";
import Info from "../../Components/Info";
// import Banner from "../../Components/Banner";

const Home = () => {
  return (
    <>
      <AppLayout>
        <Carousels />
        <Category />
        {/*  float button for back to top  */}
        <Products />
        <RecommendedProduct />
        {/* <Banner /> */}
        <Info />
      </AppLayout>
    </>
  );
};

export default Home;
