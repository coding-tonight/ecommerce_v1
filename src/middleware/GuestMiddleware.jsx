import { Outlet } from "react-router-dom";

const GuestMiddleware = () => {
    try {
        const token = localStorage.getItem('token');
        //  if there is not token then redirect to home pages
        if(!token) {
            return <Outlet />
        }
    
        window.location.href = '/'
    } catch (error) {
        // if the error is catch then redirect to the login page
        window.location.href = '/'
    }
}

export default GuestMiddleware;