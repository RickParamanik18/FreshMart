const mongoose = require("mongoose");
const con = mongoose.createConnection("mongodb://localhost:27017/kirana");
module.exports = con;
