const express = require("express");
const router = express.Router();
const homeController = require("./src/controllers/homeController")
const middlewares = require("./src/middlewares/middlewares.js");
const { worker } = require("./src/modules/multerSettings");

router.get("/", homeController.homePage, middlewares.redirMiddleware);

router.post("/upload-multiple", middlewares.imgSender, homeController.trataPost);

























module.exports = router;