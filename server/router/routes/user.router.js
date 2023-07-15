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

module.exports = router;
