const express = require("express");
const router = express.Router();

const prodController = require("../../controllers/product.controller");

router.get("/", prodController.getAllProduct);
router.get("/single", prodController.getSingleProductById);
router.get("/list", prodController.getSpecificCategoryProductsById);

module.exports = router;
