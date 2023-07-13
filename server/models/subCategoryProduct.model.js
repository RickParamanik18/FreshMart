const con = require("../config/mongo.connection");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    sub_category_id: {
        type: String,
        required: true,
    },
    veg_egg_non: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    delivery_time_in_mins: {
        type: Number,
        required: true,
    },
    item_variant: {
        type: Object,
        required: true,
    }
});

module.exports = con.model("subCategoryProducts", userSchema);
