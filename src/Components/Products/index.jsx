import { NavLink } from "react-router-dom";
import { TfiArrowRight } from "react-icons/tfi";
import { Divider  } from "antd";
import Cards from '../Card/index';
import StickSlider from "../StickSliider";
import { useSelector } from "react-redux";


const Products = () => {
  const products = useSelector(state => state.store)
  console.log(products)
  return (
    <>
      <section className="container mx-auto mt-10">
        <Divider>Our Products</Divider>

        <StickSlider>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </StickSlider>

        <NavLink to="/product" className="flex items-center gap-2 mt-3 justify-end">
          <TfiArrowRight />
          More Product
        </NavLink>
      </section>
    </>
  );
};

export default Products;
