import { Card } from "antd";

import AdminLayout from "@/Layouts/Admin/AdminLayout";
import Indicator from "@/Components/Admin/Indicator";
import BreadCrumbs from "@/Components/Admin/Breadcrumbs";
import OrderTable from "./Components/OrderTable";

const Dashboard = () => {
  return (
    <>
      <AdminLayout>
        <BreadCrumbs items={[{ title: "Dashboard" }]} />
        <Card className="mt-1">
          <Indicator />
          <section className="m-10">
            <OrderTable />
          </section>
        </Card>
      </AdminLayout>
    </>
  );
};

export default Dashboard;
