import { useState } from 'react';
import { Space, Input, Badge } from "antd";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
import { FiUser } from "react-icons/fi";
import { useMedia } from "../../Hooks/MediaQuery/useMedia";
import CartDrawer from "../Drawer/CartDrawer";

const { Search } = Input;

const Navbar = () => {
  const [openCart, setopenCart] = useState(false);

  /**
   *  media query
   * @prams
   * @type @boolean
   */

  const laptopWidth = useMedia("laptop");
  const mobileWidth = useMedia("mobile");
  /* end here */

  //  search function
  const onSearch = () => {
    console.log("result of the search");
  };

  //  function to open the cart
  const openCartFeature = () => {
    setopenCart(true);
  }


  return (
    <>
      <section
        style={{
          display: "flex",
          justifyContent: mobileWidth ? "space-between" : "space-around",
          alignItems: "center",
          width: mobileWidth ? "100%" : "80%",
          margin: "0 auto",
        }}
      >
        <div className="logo">{ import.meta.env.VITE_APP_NAME ?? 'Bhumi Forever Fashion' }</div>

        <Space.Compact size="large">
          {mobileWidth ? (
            <>
              <SearchOutlined className='text-lg cursor-pointer' />
              {/* <Search
                placeholder="Search in the Bhumi Fashion"
                onSearch={onSearch}
                className=""
                style={{ width: laptopWidth ? "100%" : 600 }}
              /> */}
            </>
          ) : (
            <>
              <Search
                placeholder="Search in the Bhumi Fashion"
                onSearch={onSearch}
                className=""
                style={{ width: laptopWidth ? "100%" : 600 }}
              />
            </>
          )}
        </Space.Compact>

        <Space
          size="large"
          style={{
            fontSize: "20px",
            cursor: "pointer",
            display: mobileWidth ? "none" : "",
          }}
        >
          <Badge count={4}>
            <ShoppingCartOutlined
              onClick={openCartFeature}
              style={{
                fontSize: "20px",
              }}
            />
          </Badge>
          <FiUser />
        </Space>
      </section>
      {/* carts */}
      <CartDrawer setopenCart={setopenCart} openCart={openCart} />
    </>
  );
};

export default Navbar;
