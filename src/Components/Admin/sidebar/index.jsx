import { Menu } from "antd";
import { items } from "./menu";


const Sidebar = () => {
  return (
    <>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["/dashboard"]}
        selectedKeys={[window.location.pathname]}
        items={items}
      />
    </>
  );
};

export default Sidebar;
