import axios from "axios";

export const getAllProducts = async () => {
    const result = await axios({
        url: `${import.meta.env.VITE_APP_SERVER_API}prod`,
        method: "get",
    });
    return result.data.data;
};

export const getSingleProduct = async (id) => {
    const result = await axios({
        url: `${import.meta.env.VITE_APP_SERVER_API}prod/single`,
        method: "get",
        headers: {
            id,
        },
    });
    return result.data.data;
};
export const getCategoryProducts = async (sub_category_id) => {
    const result = await axios({
        url: `${import.meta.env.VITE_APP_SERVER_API}prod/list`,
        method: "get",
        headers: {
            sub_category_id,
        },
    });
    return result.data.data;
};
export const getAllCategory = async () => {
    const result = await axios({
        url: `${import.meta.env.VITE_APP_SERVER_API}prod/category-list`,
        method: "get",
    });
    return result.data.data;
};
