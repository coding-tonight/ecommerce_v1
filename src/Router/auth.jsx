import { lazy } from "react";

const Register = lazy(() => import("@/Pages/Auth/Register"));
const Login = lazy(() => import("@/Pages/Auth/Login"));
const ForgetPassword = lazy(() => import("@/Pages/Auth/ForgetPassword"));
const VerifyOtp = lazy(() => import('@/Pages/Auth/ForgetPassword/VerifyOpt/verifyOpt'));
const RestPassword = lazy(() => import('@/Pages/Auth/ResetPassword'));


const authRoutes = [
    {
        key: "register",
        path: "/register",
        element: <Register />,
        auth: false,
        middlware: "guest",
      },
      {
        key: "login",
        path: "/login",
        element: <Login />,
        auth: false,
        middlware: "guest",
      },
      {
        key: "forgetpassword",
        path: "/forget/password",
        element: <ForgetPassword />,
        auth: false,
        middlware: "guest",
      },
      {
        key: "verifyopt",
        path: "/verify/otp",
        element: <VerifyOtp />,
        auth: false,
        middlware: "auth",
      },
]

export const changePasswordRoute = [
   {
    key: 'change',
    path: '/change/password',
    element: <RestPassword />,
    auth: false,
    middlware: 'rest'
   }
]

export default authRoutes;