import axios from "axios";

export const signin = async (data) => {
    const result = await axios({
        url: `${import.meta.env.VITE_APP_SERVER_API}user/signin`,
        method: "post",
        headers: data,
    });
    return result.data;
};

export const login = async (data) => {
    const result = await axios({
        url: `${import.meta.env.VITE_APP_SERVER_API}user/login`,
        method: "get",
        headers: data,
    });
    return result.data;
};
