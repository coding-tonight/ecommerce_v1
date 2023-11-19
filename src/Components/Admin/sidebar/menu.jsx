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
        key: "/category",
        icon: <VideoCameraOutlined />,
        label: "Category",
      },
      {
        key: "3",
        icon: <UploadOutlined />,
        label: "Menu",
      },
]

export { items }