const userService = require("../services/user.service");

const login = async (req, res) => {
    const headerParams = req.headers;

    const result = await userService.login(headerParams);
    res.send(result);
};

const signin = async (req, res) => {
    const headerParams = req.headers;

    const result = await userService.signin(headerParams);
    res.send(result);
};

module.exports = { login, signin };
