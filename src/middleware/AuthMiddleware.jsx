import { Outlet } from "react-router-dom";

const AuthMiddleware = () => {
  try {
    //  if there is token or not
    const token = localStorage.getItem("token");
    
    if (token) {
      return <Outlet />;
    }

    window.location.href = "/login";
  } catch (error) {
    //  if the error is catch then redirect to the login pages
    window.location.href = "/login";
  }
};

export default AuthMiddleware;
