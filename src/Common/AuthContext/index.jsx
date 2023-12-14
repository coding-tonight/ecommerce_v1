import { createContext, useContext } from "react";
import { base64Decode } from "../common";

const AuthContext = createContext(null);

export const auth = () => {
  const data = useContext(AuthContext);
  return data;
};


const getUserData = () => {
  const userData = localStorage.getItem("userData");

  if (!userData) return;

  return JSON.parse(base64Decode(userData)) ?? null;
};

const AuthProvider = ({ children }) => {
  return (
     <AuthContext.Provider value={getUserData()}>
        {children}
     </AuthContext.Provider>
  );
};

export default AuthProvider;
