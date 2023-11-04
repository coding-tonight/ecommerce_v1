import AdminLayout from "../../../Layouts/Admin/AdminLayout";
import Indicator from "../../../Components/Admin/Indicator";

const Dashboard = () => {
    console.log('hello')
  return (
    <>
      <AdminLayout>
        <Indicator />
        <section>this is dashboard</section>
      </AdminLayout>
    </>
  );
};


export default Dashboard;
