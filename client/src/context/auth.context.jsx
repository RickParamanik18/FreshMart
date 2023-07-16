import { createContext, useState } from "react";
import jwt from "jwt-decode";
import Cookies from "js-cookie";
export const authContext = createContext();

const getData = () => {
    const token = Cookies.get("userData");
    const userData = token ? jwt(token) : {};
    const isLoggedIn = Boolean(token);
    return {
        token,
        userData,
        isLoggedIn,
    };
};

export const AuthContextProvider = ({ children }) => {
    const [authData, setAuthData] = useState(getData());

    return (
        <authContext.Provider
            value={{ ...authData, setAuthData: () => setAuthData(getData()) }}
        >
            {children}
        </authContext.Provider>
    );
};
