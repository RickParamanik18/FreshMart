const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user.controller");
const { isAuthorized } = require("../../middlewares/isAuthorized");

router.get("/", (req, res) => {
    res.send("user router working");
});
router.get("/login", userController.login);
router.post("/signin", userController.signin);
router.get("/logout", isAuthorized, userController.logout);
router.get("/cart", isAuthorized, userController.cart);
router.get("/wishlist", isAuthorized, userController.cart); //it using same contorller function 'cart', as it requires same functionality

module.exports = router;
