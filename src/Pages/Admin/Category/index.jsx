import { Card } from "antd";

import AdminLayout from "@/Layouts/Admin/AdminLayout";
import BreadCrumbs from "@/Components/Admin/Breadcrumbs";

const Category = () => {
  return (
    <>
      <AdminLayout>
        <BreadCrumbs items={[{ title: "Dashboard" }, { title: "Category" }]} />
        <Card className="mt-1">
          <h1>this is category page</h1>
        </Card>
      </AdminLayout>
    </>
  );
};

export default Category;
