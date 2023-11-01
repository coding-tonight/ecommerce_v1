import { Menu } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import { useMedia } from "../../Hooks/MediaQuery/useMedia";

const options = [
  {
    label: "Categories",
    key: "category",
    icon: <UnorderedListOutlined />,
    children: [
      {
        label: "Option 1",
        key: "setting:1",
      },
      {
        label: "Option 2",
        key: "setting:2",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
        ]
      },
    ],
  },
  {
    label: "Women Wears",
    key: "women",
    // icon: <UnorderedListOutlined />,
  },

  {
    label: "Indian Clothes",
    key: "indian",
    // icon: <UnorderedListOutlined />,
  },
  {
    label: "Men wears",
    key: "men",
    // icon: <UnorderedListOutlined />,
  },
  {
    label: "Wedding",
    key: "wedding",
    // icon: <UnorderedListOutlined />,
  },
];

const Menus = () => {
  const isMobile = useMedia("mobile");

  return (
    <>
      {isMobile ? (
        <>
          <UnorderedListOutlined className="cursor-pointer" />
        </>
      ) : (
        <>
          <Menu
            items={options}
            mode="horizontal"
            size="large"
            style={{
              border: "none",
              color: "black",
            }}
          />
        </>
      )}
    </>
  );
};

export default Menus;
