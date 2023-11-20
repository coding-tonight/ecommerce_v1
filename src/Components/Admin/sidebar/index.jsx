import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { items } from "./menu";


const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["/dashboard"]}
        selectedKeys={[window.location.pathname]}
        items={items}
        onClick={item => {
          navigate(item.key)
        }}
      />
    </>
  );
};

export default Sidebar;
