import { Outlet } from "react-router-dom"

/**
 * middleware for admin routes 
 *
 */

const AdminMiddlware = () => {
    const auth = JSON.parse(localStorage.getItem('userData')) ?? false
    // if user is superuser then give access to the cms dashboard
    if(auth.is_superuser) {
        return <Outlet />
    }

    window.location.href = '/login'
}

export default AdminMiddlware;