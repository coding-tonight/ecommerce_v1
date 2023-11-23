import { Outlet } from "react-router-dom";
import { base64Decode } from "@/Common/common";

/**
 *  change password middleware
 * @returns {JSX.Element}  else run window function to redirect
 */

const ResetMiddleware = () => {
  try {
    const token = JSON.parse(base64Decode(localStorage.getItem("resetToken"))) ?? null;
    // check if there is rest token or not
    if (token && token.user_id) {
      return <Outlet />;
    }

    window.location.href = "/login";
  } catch (error) {
    window.location.href = "/login";
  }
};

export default ResetMiddleware;
