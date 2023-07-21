const users = require("../models/user.model");

const login = async (params) => {
    const result = await users.findOne({ email: params.email });
    // console.log(result)
    if (result && result.password === params.password) return result;
    else return null;
};
const signin = async (params) => {
    let result = await users.findOne({ email: params.email });
    if (result) return null;
    const newUser = new users({
        name: params.name,
        email: params.email,
        password: params.password,
        image: params.image,
    });

    result = await newUser.save();
    return result;
};
const cart = async ({ operation, product = null, userData, path }) => {
    const currentList = path === "/cart" ? userData.cart : userData.wishlist;
    product = JSON.parse(product);

    const updatedList = currentList.filter((item) => item._id !== product._id);
    if (operation !== "remove") updatedList.push(product);

    await users.updateOne(
        { email: userData.email },
        {
            $set:
                path === "/cart"
                    ? { cart: updatedList }
                    : { wishlist: updatedList },
        }
    );
    const result = await users.findOne({ email: userData.email });
    return result;
};

module.exports = {
    login,
    signin,
    cart,
};
