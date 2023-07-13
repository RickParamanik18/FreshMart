const express = require("express");
const router = express.Router();
const productRouter = require("./routes/product.router");
const userRouter = require("./routes/user.router");

router.use("/prod", productRouter);
router.use("/user", userRouter);

module.exports = router;
