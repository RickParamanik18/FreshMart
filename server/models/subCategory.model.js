const con = require("../config/mongo.connection");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const subCategorySchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    main_category_id: {
        type: String,
        required: true,
    }
});

module.exports = con.model("subCategories", subCategorySchema);