// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import {
  UnorderedListOutlined,
  MailOutlined,
  AppstoreOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { useMedia } from "../../Hooks/MediaQuery/useMedia";
// import MegaMenu from './Menu/index';

const items = [
  {
    label: "Categories",
    key: "new",
    icon: <AppstoreOutlined />,
    children: [
      {
        label: "Men",
        key: "setting:1",
      },
      {
        label: "Women",
        key: "setting:2",
      },
    ],
  },
  {
    label: "Shop",
    key: "/products",
    icon: <ShoppingOutlined />,
    // disabled: true,
  },

  {
    label: "Contact",
    key: "mail",
    icon: <MailOutlined />,
  },
];

const Menus = () => {
  const isMobile = useMedia("mobile");
  // const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {isMobile ? (
        <>
          <UnorderedListOutlined className="cursor-pointer" />
        </>
      ) : (
        <>
          <div className="flex justify-center">
            {/* <MegaMenu title="categories" openMenu={openMenu} setOpenMenu={setOpenMenu} /> */}
            <Menu
              items={items}
              onClick={(item) => {
                 navigate(item.key)
              }}
              selectedKeys={[window.location.pathname]}
              disabledOverflow={true}
              mode="horizontal"
            />
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
