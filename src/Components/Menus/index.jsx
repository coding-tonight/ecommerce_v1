import { useState } from "react";
// import { Menu } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import { useMedia } from "../../Hooks/MediaQuery/useMedia";
import Menu from './Menu/index';

const Menus = () => {
  const isMobile = useMedia("mobile");
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {isMobile ? (
        <>
          <UnorderedListOutlined className="cursor-pointer" />
        </>
      ) : (
        <>
        <div className="flex">
          <Menu title="categories" openMenu={openMenu} setOpenMenu={setOpenMenu} />
          {/* <Menu title="menu" openMenu={openMenu} setOpenMenu={setOpenMenu} /> */}
        </div>
        </>
      )}
    </>
  );
};

export default Menus;
