import { Outlet } from "react-router-dom"

const AuthMiddleware = () => {
    const token = localStorage.getItem('token');
    
    if(token) {
        return <Outlet />
    }
    window.location.href = '/login'
}


export default AuthMiddleware;