import AppLayout from "../../Layouts/AppLayout";
import Carousels from "../../Components/Carousel";
import Category from "../../Components/Category";
import Products from "../../Components/Products";
import Info from "../../Components/Info";
import Banner from "../../Components/Banner";

const Home = () => {
  return (
    <>
      <AppLayout>
        <Carousels />
        <Category />
        <Products />
        <Banner />
        <Info />
      </AppLayout>
    </>
  );
};

export default Home;
