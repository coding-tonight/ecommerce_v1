import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";

import GuestMiddleware from "@/middleware/GuestMiddleware";
import AdminMiddlware from "@/middleware/AdminMIddleware";
// routes imports
import AdminRoute from "./admin";
import authRoutes from "./auth";
import guestRoutes from "./guest";

// preloader
import Preloader from "@/Common/Preloader";

const App = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <Routes>
          {/* public routes */}
          {guestRoutes.map((route) => {
            return (
              <Route
                key={route.key}
                path={route.path}
                element={route.element}
              />
            );
          })}

          {/* guest routers */}
          <Route element={<GuestMiddleware />}>
            {authRoutes.map((route) => {
              return (
                <Route
                  key={route.key}
                  path={route.path}
                  element={route.element}
                />
              );
            })}
          </Route>

          {/* admin routes */}
          <Route element={<AdminMiddlware />}>
            {AdminRoute.map((name) => {
              return (
                <Route key={name.key} path={name.path} element={name.element} />
              );
            })}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
