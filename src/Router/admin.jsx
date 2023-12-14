 import { lazy } from "react";
 
 const Dashboard  = lazy(() => import('@/Pages/Admin/Dashboard'));
 const Category = lazy(() => import('@/Pages/Admin/Category'));
 const AllProduct = lazy(() => import('@/Pages/Admin/Products'));
 
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
   {
      key: 'all-product',
      path: '/dashboard/all-product',
      element: <AllProduct />,
      auth: true,
      middleware: 'admin'
   },
]

export default AdminRoute;