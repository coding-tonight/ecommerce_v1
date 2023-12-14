import { Button, Card } from "antd";

import AdminLayout from "@/Layouts/Admin/AdminLayout";
import BreadCrumbs from "@/Components/Admin/Breadcrumbs";
import CustomTable from "@/Components/Admin/Table";
import {
  DeleteColumnOutlined,
  EditOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const Products = () => {
  const columns = [
    {
      title: "S.N",
      dataIndex: "index",
      key: "index",
      width: "10%",
      // ...getColumnSearchProps('age'),
    },
    {
      title: "Product Code",
      dataIndex: "product_code",
      key: "product_code",
      width: "20%",
      // ...getColumnSearchProps('name'),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "30%",
      // ...getColumnSearchProps('age'),
    },
    {
      title: "Price",
      dataIndex: "Price",
      key: "price",
      // width: '20%',
      // ...getColumnSearchProps('age'),
    },
    {
      title: "stock",
      dataIndex: "stock",
      key: "stock",
      // width: '20%',
      // ...getColumnSearchProps('age'),
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      // width: '20%',
      // ...getColumnSearchProps('age'),
    },
    {
      title: "Action",
      dataIndex: "rating",
      key: "rating",
      // width: '20%',
      // ...getColumnSearchProps('age'),
      render: () => (
        <>
          <DeleteColumnOutlined />
          <EditOutlined />
        </>
      ),
    },
  ];
  return (
    <>
      <AdminLayout>
        <BreadCrumbs
          items={[{ title: "Dashboard" }, { title: "All Product" }]}
        />
        <Card className="mt-1">
          <div>
            <Button className="flex items-center justify-center">
              <PlusOutlined />
              Add
            </Button>
          </div>
          <CustomTable columns={columns} />
        </Card>
      </AdminLayout>
    </>
  );
};

export default Products;
