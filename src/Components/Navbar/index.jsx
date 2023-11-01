import { useState } from "react";
import { Link } from "react-router-dom";
import { Space, Input, Badge } from "antd";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
import { FiUser } from "react-icons/fi";
import { useMedia } from "../../Hooks/MediaQuery/useMedia";
import CartDrawer from "../Drawer/CartDrawer";
import { auth } from "../../Common/AuthContext";

const { Search } = Input;

const Navbar = () => {
  const [openCart, setopenCart] = useState(false);
  const authData = auth();  // get user data for the auth context 

  // console.log(authData);

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
  };

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
        <div className="logo">
          {import.meta.env.VITE_APP_NAME ?? "Bhumi Forever Fashion"}
        </div>

        <Space.Compact size="large">
          {mobileWidth ? (
            <>
              <SearchOutlined className="text-lg cursor-pointer" />
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
          {/* if auth user is login then show drop or login or register link */}
          {authData ? (
            <>
              <FiUser />
            </>
          ) : (
            <>
              <Link className="text-sm" to="/login">
                Login | Register
              </Link>
            </>
          )}
        </Space>
      </section>
      {/* carts */}
      <CartDrawer setopenCart={setopenCart} openCart={openCart} />
    </>
  );
};

export default Navbar;
