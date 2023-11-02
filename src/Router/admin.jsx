 import Dashboard from "../Pages/Admin/Dashboard";
 
 
 const AdminRoute = [
    {
       key: 'dashboard',
       path: '/dashboard',
       element: <Dashboard />,
       auth: true,
       middleware: 'admin'
    },
]

export default AdminRoute;