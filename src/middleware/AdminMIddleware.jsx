import { Outlet } from "react-router-dom"
import { base64Decode } from "@/Common/common"

/**
 * middleware for admin routes 
 *
 */

const AdminMiddlware = () => {
    const auth = base64Decode(JSON.parse((localStorage.getItem('userData'))))
    // if user is superuser then give access to the cms dashboard
    if(auth.is_superuser) {
        return <Outlet />
    }

    window.location.href = '/login'
}

export default AdminMiddlware;