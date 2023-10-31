import { createContext , useContext} from "react";

const AuthContext = createContext(null)


const getUserData = () => {
    const userData = JSON.parse(localStorage.getItem('userData'))

    if(!userData) return;

    return userData ?? null;
}








