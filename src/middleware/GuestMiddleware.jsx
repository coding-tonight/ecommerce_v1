import { Outlet } from "react-router-dom";

const GuestMiddleware = () => {
    const token = localStorage.getItem('token');
    //  if there is not token then redirect to home pages
    if(!token) {
        return <Outlet />
    }

    window.location.href = '/'
}

export default GuestMiddleware;