const jwt = require("jsonwebtoken");

const isAuthorized = (req, res, next) => {
    if (req.headers.authorization)
        if (jwt.verify(req.headers.authorization, process.env.JWT_SECRET))
            next();
    res.send({
        status: 400,
        msg: "authorization failed",
    });
};

module.exports = { isAuthorized };
