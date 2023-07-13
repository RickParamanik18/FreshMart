const subCategoryProducts = require("../models/subCategoryProduct.model");

const getAllProduct = async () => {
    return await subCategoryProducts.find();
};
const getSingleProductById = async (params) => {
    return await subCategoryProducts.findOne(params);
};
const getSpecificCategoryProductsById = async (params) => {
    return await subCategoryProducts.find(params);
};

module.exports = {
    getAllProduct,
    getSingleProductById,
    getSpecificCategoryProductsById,
};
