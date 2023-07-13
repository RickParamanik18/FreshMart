const express = require("express");
const router = express.Router();

const prodController = require("../../controllers/product.controller");

router.get("/", prodController.getAllProduct);
router.get("/single", prodController.getSingleProductById);
router.get("/list", prodController.getSpecificCategoryProductsById);
router.get("/category-list", prodController.getAllCategory);

module.exports = router;
