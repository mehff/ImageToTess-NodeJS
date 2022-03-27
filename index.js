const express = require("express");
const multer = require("multer");
const fs = require("fs")
const app = express();
const routes = require("./routes");
const path = require("path");
const port = 6969;

app.use(routes);
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname));
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.listen(port, () => {
    console.log(`Server online na porta ${port}.\nhttp://localhost:${port}`);
});
