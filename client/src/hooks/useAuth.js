import jwt from "jwt-decode";
import Cookies from "js-cookie";
import { useState } from "react";
const useAuth = () => {
    const token = Cookies.get("userData");
    const userData = token ? jwt(token) : {};
    const isLoggedIn = Boolean(token);
    const [authData, setAuthData] = useState({ token, userData, isLoggedIn });
    return {
        ...authData,
        updateAuthDetails: setAuthData,
    };
};
export default useAuth;
