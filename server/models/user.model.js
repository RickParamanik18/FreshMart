const con = require("../config/mongo.connection");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    wishlist: {
        type: Object,
        default: [],
    },
    cart: {
        type: Object,
        default: [],
    },
});

module.exports = con.model("users", userSchema);
