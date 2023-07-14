const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user.controller");

router.get("/", (req, res) => {
    res.send("user router working");
});
router.get("/login", userController.login);
router.post("/signin", userController.signin);

module.exports = router;
