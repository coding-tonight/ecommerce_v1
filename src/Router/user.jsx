import { lazy } from "react";


const Profile = lazy(()=> import('@/Pages/Auth/User/Profile'))


const userRoutes = [
    {
        key: "profile",
        path: "/profile",
        element: <Profile />,
        auth: false,
        middlware: "auth",
      },
]

export default userRoutes;