const express = require("express");
const router = express.Router();
const homeController = require("./src/controllers/homeController")
const middlewares = require("./src/middlewares/middlewares.js")

router.get("/", homeController.homePage, middlewares.redirMiddleware);




























module.exports = router;