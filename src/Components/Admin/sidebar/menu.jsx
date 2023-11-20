import {
    UploadOutlined,
    DashboardOutlined,
    VideoCameraOutlined,
  } from "@ant-design/icons";

  
const items = [
    {
        key: "/dashboard",
        icon: <DashboardOutlined />,
        label: "Dashboard",
      },
      {
        key: "/dashboard/category",
        icon: <VideoCameraOutlined />,
        label: "Category",
      },
      {
        key: "/dashboard/menu",
        icon: <UploadOutlined />,
        label: "Menu",
      },
]

export { items }