import { Outlet } from "react-router-dom"
import { base64Decode } from "@/Common/common"

/**
 * middleware for admin routes 
 *
 */

const AdminMiddlware = () => {
    try {
        const auth = JSON.parse(base64Decode(localStorage.getItem('userData'))) 
        // if user is superuser then give access to the cms dashboard
        if(auth.is_superuser) {
            return <Outlet />
        }
    
        window.location.href = '/login'
    }
    catch(error) {
        //  if the error is catch the redirect to the login page.
        window.location.href = '/login'
    }
}

export default AdminMiddlware;