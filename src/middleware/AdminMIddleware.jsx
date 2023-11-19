import { Outlet } from "react-router-dom"
import { base64Decode } from "@/Common/common"

/**
 * middleware for admin routes 
 *
 */

const AdminMiddlware = () => {
    const auth = JSON.parse(base64Decode(localStorage.getItem('userData'))) ?? false
    // if user is superuser then give access to the cms dashboard
    if(auth.is_superuser) {
        return <Outlet />
    }

    window.location.href = '/login'
}

export default AdminMiddlware;