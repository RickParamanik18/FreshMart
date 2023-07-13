const productRepo = require("../repositories/product.repository");

const getAllProduct = async () => {
    try {
        const data = await productRepo.getAllProduct();
        return {
            data,
            status: 200,
            msg: "success",
        };
    } catch (err) {
        return {
            data: [],
            status: 400,
            msg: "error",
        };
    }
};

const getSingleProductById = async (_id) => {
    try {
        const data = await productRepo.getSingleProductById({ _id });
        return {
            data,
            status: 200,
            msg: "success",
        };
    } catch (err) {
        return {
            data: [],
            status: 400,
            msg: "error",
        };
    }
};

const getSpecificCategoryProductsById = async (sub_category_id) => {
    try {
        const data = await productRepo.getSpecificCategoryProductsById({
            sub_category_id,
        });
        return {
            data,
            status: 200,
            msg: "success",
        };
    } catch (err) {
        return {
            data: [],
            status: 400,
            msg: "error",
        };
    }
};

module.exports = {
    getAllProduct,
    getSingleProductById,
    getSpecificCategoryProductsById,
};
