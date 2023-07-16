const userService = require("../services/user.service");

const login = async (req, res) => {
    const headerParams = req.headers;

    const result = await userService.login(headerParams);
    result.status == 200 &&
        res.cookie("userData", result.token, { maxAge: 86400000 });
    res.send(result);
};

const signin = async (req, res) => {
    const headerParams = req.headers;

    const result = await userService.signin(headerParams);
    result.status == 200 &&
        res.cookie("userData", result.token, { maxAge: 86400000 });
    res.send(result);
};

const logout = async (req, res) => {
    res.clearCookie("userData");
    res.send({
        status: 200,
        msg: "logout successful",
    });
};

const cart = async (req, res) => {
    const path = req.path;
    const headerParams = req.headers;
    const { userData, product, operation } = headerParams;

    const result = await userService.cart({
        userData,
        product,
        operation,
        path,
    });

    result.status == 200 &&
        res.cookie("userData", result.token, { maxAge: 86400000 });
    res.send(result);
};

module.exports = { login, signin, logout, cart };
