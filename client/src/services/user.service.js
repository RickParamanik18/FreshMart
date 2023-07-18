import axios from "axios";

export const signin = async (data) => {
    const result = await axios({
        url: `${import.meta.env.VITE_APP_SERVER_API}user/signin`,
        method: "post",
        headers: data,
        withCredentials: true,
    });
    return result.data;
};

export const login = async (data) => {
    const result = await axios({
        url: `${import.meta.env.VITE_APP_SERVER_API}user/login`,
        method: "get",
        headers: data,
        withCredentials: true,
    });
    return result.data;
};

export const logout = async (authorization) => {
    const result = await axios({
        url: `${import.meta.env.VITE_APP_SERVER_API}user/logout`,
        method: "get",
        headers: { authorization },
        withCredentials: true,
    });
    return result.data;
};

export const cart = async (operation, product, authorization) => {
    const result = await axios({
        url: `${import.meta.env.VITE_APP_SERVER_API}user/cart`,
        method: "get",
        headers: { operation, product: JSON.stringify(product), authorization },
        withCredentials: true,
    });
    return result.data;
};
export const wishlist = async (operation, product, authorization) => {
    const result = await axios({
        url: `${import.meta.env.VITE_APP_SERVER_API}user/wishlist`,
        method: "get",
        headers: { operation, product: JSON.stringify(product), authorization },
        withCredentials: true,
    });
    return result.data;
};