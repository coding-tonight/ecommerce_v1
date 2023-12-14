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
      {
        key: "/dashboard/all-product",
        icon: <UploadOutlined />,
        label: 'Store'
      }
]

export { items }