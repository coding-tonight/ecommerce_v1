import { lazy } from "react";

// import Home from "../Pages/Home";
// import Register from "../Pages/Auth/Register";
// import ProductPage from "../Pages/Reusable/Product";

const Home = lazy(() => import("@/Pages/Home"));
const ProductPage = lazy(() => import("@/Pages/Reusable/Product"));
const NotFound = lazy(()=> import('@/Pages/404'));

const guestRoutes = [
  {
    key: "home",
    path: "/",
    element: <Home />,
    auth: false,
    middlware: "guest",
  },
  {
    key: "product",
    path: "/product/:id/:name/:size/:color/",
    element: <ProductPage />,
    auth: false,
    middlware: "guest",
  },
  {
    key: "notfound",
    path: "*",
    element: <NotFound />,
    auth: false,
    middlware: "guest",
  },
];

export default guestRoutes
