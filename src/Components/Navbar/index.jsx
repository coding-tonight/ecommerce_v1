import { Space, Input, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { FiUser } from "react-icons/fi";
import { useMedia } from "../../Hooks/MediaQuery/useMedia";

const { Search } = Input;

const Navbar = () => {
  /**
   *  media query
   * @prams
   * @type @boolean
   */
  const laptopWidth = useMedia("laptop");
  const mobileWidth = useMedia("mobile");

  //  search function
  const onSearch = () => {
    console.log("result of the search");
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
        <div className="logo">Bhumi Forever Fashion</div>

        <Space.Compact size="large">
          <Search
            placeholder="Search in the Bhumi Fashion"
            onSearch={onSearch}
            className=""
            style={{ width: laptopWidth ? "100%" : 600 }}
          />
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
              style={{
                fontSize: "20px",
              }}
            />
          </Badge>
          <FiUser />
        </Space>
      </section>
    </>
  );
};

export default Navbar;
