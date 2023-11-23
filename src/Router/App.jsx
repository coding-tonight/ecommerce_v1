import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";

// middlewares
import GuestMiddleware from "@/middleware/GuestMiddleware";
import AdminMiddlware from "@/middleware/AdminMIddleware";
import AuthMiddleware from "@/middleware/AuthMiddleware";
import ResetMiddleware from "@/middleware/ResetMiddleware";

// routes imports
import AdminRoute from "./admin";
import authRoutes, { changePasswordRoute } from "./auth";
import guestRoutes from "./guest";
import userRoutes from "./user";

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

          {/* guest routes */}
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

          {/* user routes */}
          <Route element={<AuthMiddleware />}>
            {userRoutes.map((route) => {
              return (
                <Route
                  key={route.key}
                  path={route.path}
                  element={route.element}
                />
              );
            })}
          </Route>

          {/* reset password route */}
          <Route element={<ResetMiddleware />}>
            {changePasswordRoute.map((route) => {
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
