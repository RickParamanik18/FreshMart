const subCategoryProducts = require("../models/subCategoryProduct.model");
const subCategories = require("../models/subCategory.model");

const getAllProduct = async () => {
    return await subCategoryProducts.find();
};
const getSingleProductById = async (params) => {
    return await subCategoryProducts.findOne(params);
};
const getSpecificCategoryProductsById = async (params) => {
    return await subCategoryProducts.find(params);
};
const getAllCategory = async () => {
    return await subCategories.find();
};
module.exports = {
    getAllProduct,
    getSingleProductById,
    getSpecificCategoryProductsById,
    getAllCategory
};
