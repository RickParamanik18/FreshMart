const userRepo = require("../repositories/user.repository");
const jwt = require("jsonwebtoken");

const login = async (params) => {
    try {
        let data = await userRepo.login(params);
        data = {
            _id: data._id,
            name: data.name,
            email: data.email,
            wishlist: data.wishlist,
            cart: data.cart,
        };
        const token = jwt.sign(data, process.env.JWT_SECRET);

        return data
            ? {
                  status: 200,
                  msg: "success",
                  token,
              }
            : {
                  status: 400,
                  msg: "failed",
              };
    } catch (err) {
        console.log(err);
        return {
            status: 400,
            msg: "failed",
        };
    }
};
const signin = async (params) => {
    try {
        let data = await userRepo.signin(params);
        if (!data)
            return {
                status: 400,
                msg: "email already registered, go to login",
            };
        data = {
            _id: data._id,
            name: data.name,
            email: data.email,
            wishlist: data.wishlist,
            cart: data.cart,
        };

        const token = jwt.sign(data, process.env.JWT_SECRET);

        return {
            status: 200,
            msg: "success",
            token,
        };
    } catch (err) {
        console.log(err);
        return {
            status: 400,
            msg: "failed",
        };
    }
};

module.exports = { login, signin };
