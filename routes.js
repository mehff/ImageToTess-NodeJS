const express = require("express");
const router = express.Router();
const homeController = require("./src/controllers/homeController")
const middlewares = require("./src/middlewares/middlewares.js");
const { worker, arrayUpload } = require("./src/modules/multerSettings");

router.get("/", homeController.homePage, middlewares.redirMiddleware);

router.post("/upload-multiple", arrayUpload, homeController.fileUploading);

























module.exports = router;