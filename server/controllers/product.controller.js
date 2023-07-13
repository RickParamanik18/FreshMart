const productService = require("../services/product.service");

const getAllProduct = async (req, res) => {
    const result = await productService.getAllProduct();
    res.send(result);
};

const getSingleProductById = async (req, res) => {
    const headerParams = req.headers;

    const result = await productService.getSingleProductById(headerParams.id);
    res.send(result);
};

const getSpecificCategoryProductsById = async (req, res) => {
    const headerParams = req.headers;

    const result = await productService.getSpecificCategoryProductsById(
        headerParams.sub_category_id
    );
    res.send(result);
};

const getAllCategory = async (req, res) => {
    const result = await productService.getAllCategory();
    res.send(result);
};

module.exports = {
    getAllProduct,
    getSingleProductById,
    getSpecificCategoryProductsById,
    getAllCategory,
};
