import { Space, Input, Select, Badge } from "antd";
import { useMediaQuery } from "react-responsive";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { FiUser } from "react-icons/fi";

const { Search } = Input;

// this categoires will be fetch from the api after backend is done

const options = [
  {
    value: "data",
    label: "Sari",
  },
  {
    value: "data2",
    label: "options 2",
  },
];

const Navbar = () => {
  // query
  const isDesktopOrLaptop = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 800px)",
  });
  //  search function
  const onSearch = () => {
    console.log("result of the search");
  };

  return (
    <>
      <section
        style={{
          display: "flex",
          justifyContent: isMobile ? "space-between" : "space-around",
          alignItems: "center",
          width: isMobile ? "100%" : "80%",
          margin: "0 auto",
        }}
      >
        <div className="logo">Bhumi Forever Fashion</div>

        <Space.Compact size="large">
          {/* <Select
            defaultValue="Categories"
            options={options}
            style={{
              width: 120,
            }}
          /> */}
          <Search
            placeholder="Search in the Bhumi Fashion"
            onSearch={onSearch}
            className=""
            style={{ width: isDesktopOrLaptop ? "100%" : 600 }}
          />
        </Space.Compact>

        <Space
          size="large"
          style={{
            fontSize: "20px",
            cursor: "pointer",
            display: isMobile ? "none" : "",
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
