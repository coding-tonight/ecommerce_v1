import { useState } from "react";
import { Link } from "react-router-dom";
import { Space, Input, Badge, Dropdown } from "antd";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
import { FiUser } from "react-icons/fi";
import { useMedia } from "../../Hooks/MediaQuery/useMedia";
import CartDrawer from "../Drawer/CartDrawer";
import { auth } from "@/Common/AuthContext";
import { Logo } from '@/Common/image'
import { logout } from "@/config/axios/config";

const { Search } = Input;

const Navbar = () => {
  const [openCart, setopenCart] = useState(false);
  const authData = auth(); // get user data for the auth context


  //  menu for user avatar
  const items = [
    {
      key: "0",
      type: "group",
      label: (
        <a
          // target="_blank"
          rel="noopener noreferrer"
          href="#"
        >
          {authData?.username}
        </a>
      ),
    },
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/profile"
        >
          Profile
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          setting
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={logout}
        >
          Logout
        </a>
      ),
      // icon: <SmileOutlined />,
      // disabled: true
    },
  ];

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
        <Link to="/" className="logo items-center">
          <img src={Logo} height={140} width={140}  />
          {/* {import.meta.env.VITE_APP_NAME ?? "Bhumi Forever Fashion"} */}
        </Link>

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
              <Dropdown menu={{ items }} placement="bottomRight">
                <FiUser />
              </Dropdown>
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
