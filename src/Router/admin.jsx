 import { lazy } from "react";
 
 const Dashboard  = lazy(() => import('@/Pages/Admin/Dashboard'));
 const Category = lazy(() => import('@/Pages/Admin/Category'));
 
 const AdminRoute = [
    {
       key: 'dashboard',
       path: '/dashboard',
       element: <Dashboard />,
       auth: true,
       middleware: 'admin'
    },
    {
      key: 'category',
      path: '/dashboard/category',
      element: <Category />,
      auth: true,
      middleware: 'admin'
   },
]

export default AdminRoute;