const express = require("express");
const router = express.Router();
const homeController = require("./src/controllers/homeController")
const middlewares = require("./src/middlewares/middlewares.js");
const fileHandling = require("./src/modules/fileHandling");
// const teste = require("./src/modules/fileHandling");
const { arrayUpload } = require("./src/modules/multerSettings");

router.get("/", middlewares.setHomePage, homeController.mainPage);

router.post("/upload-multiple", arrayUpload, fileHandling.fileUploading, fileHandling.extSelector, fileHandling.sendToOCR , fileHandling.baribers, middlewares.setSuccessPage, homeController.mainPage);

router.get("/backToHome", middlewares.setHomePage, homeController.mainPage);





















module.exports = router;