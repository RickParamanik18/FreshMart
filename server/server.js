const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const router = require("./router/router");

app.use(
    cors({
        origin: true,
        credentials: true,
    })
);
app.use("/api", router);

app.listen(
    process.env.PORT,
    console.log(`LISTENING TO PORT ${process.env.PORT}`)
);

app.get("/", (req, res) => {
    res.send("server running");
});
